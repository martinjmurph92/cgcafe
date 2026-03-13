import { unstable_cache } from "next/cache";

import { TEAM_ROLES } from "@/payload/collections/TeamMembers";
import type { TeamMember } from "@/payload-types";
import { getPayloadClient } from "@/lib/payload";

export type TeamRoleValue = (typeof TEAM_ROLES)[number]["value"];

export type TeamMemberGroup = {
  id: string;
  label: string;
  value: TeamRoleValue;
  members: TeamMember[];
};

async function fetchTeamMembersGroupedByRole(): Promise<TeamMemberGroup[]> {
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "team-members",
    limit: 100,
    sort: "order",
    depth: 1,
  });

  const members = result.docs as TeamMember[];
  const byRole = new Map<TeamRoleValue, TeamMember[]>();

  for (const member of members) {
    const role = (member.role ?? "crew") as TeamRoleValue;
    if (!byRole.has(role)) {
      byRole.set(role, []);
    }
    byRole.get(role)!.push(member);
  }

  return TEAM_ROLES.map(({ label, value }) => ({
    id: value,
    label,
    value,
    members: byRole.get(value) ?? [],
  })).filter((group) => group.members.length > 0);
}

export async function getTeamMembersGroupedByRole(): Promise<
  TeamMemberGroup[]
> {
  return unstable_cache(
    fetchTeamMembersGroupedByRole,
    ["team-members-grouped"],
    { tags: ["team-members"] }
  )();
}
