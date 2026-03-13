import type { TeamBlock as TeamBlockProps } from "@/payload-types";

import { getTeamMembersGroupedByRole } from "@/actions/team-members";
import { MediaImage } from "@/components/media-image";
import { cn } from "@/lib/classnames";
import { isMedia } from "@/lib/type-guards";

const ROLE_LABELS: Record<string, string> = {
  owner: "Owners",
  manager: "Manager",
  supervisor: "Supervisor",
  crew: "Café Crew",
};

const SPACING = {
  none: "py-0",
  small: "py-4 md:py-6",
  medium: "py-8 md:py-12",
  large: "py-12 md:py-24",
};

function getInitials(name: string): string {
  const first = name.trim().split(/\s+/)[0];
  return first?.[0]?.toUpperCase() ?? "?";
}

function OwnerCard({ member }: { member: Record<string, unknown> }) {
  const m = member as {
    name: string;
    photo?: unknown;
    jobTitle?: string | null;
    bio?: string | null;
    favouriteOrder?: string | null;
    funFact?: string | null;
  };
  const initials = getInitials(m.name ?? "");
  return (
    <div className="rounded-[var(--radius-lg)] overflow-hidden border border-gold/10 bg-charcoal-2 grid grid-cols-1 md:grid-cols-[240px_1fr] transition-[border-color,box-shadow] hover:border-gold/30 hover:shadow-xl">
      <div className="relative min-h-[160px] md:min-h-[280px] flex flex-col items-center justify-end pb-6 bg-gradient-to-b from-charcoal-3 to-gold/10">
        {isMedia(m.photo) && m.photo.url ? (
          <MediaImage
            resource={m.photo}
            fill
            className="object-cover"
            alt={m.name ?? ""}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-15">
            ☕
          </div>
        )}
        <div
          className="relative z-10 w-[72px] h-[72px] rounded-full border-2 border-gold/40 bg-gold/10 flex items-center justify-center font-display text-[1.6rem] text-gold mb-3"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          {initials}
        </div>
        <span className="relative z-10 font-sans text-[0.62rem] font-bold tracking-[0.18em] uppercase text-charcoal bg-gold px-2.5 py-1 rounded-sm">
          Owner
        </span>
      </div>
      <div className="p-6 md:p-8 flex flex-col">
        <div className="font-display text-2xl text-cream mb-1">{m.name}</div>
        <div className="font-sans text-xs tracking-[0.12em] uppercase text-gold font-bold mb-4">
          {m.jobTitle}
        </div>
        <p className="font-sans text-sm text-cream-muted leading-7 flex-1 mb-6">
          {m.bio}
        </p>
        <div className="pt-5 border-t border-gold/10 space-y-2">
          {m.favouriteOrder && (
            <div className="flex items-start gap-2 font-sans text-sm text-cream-muted">
              <span className="text-base flex-shrink-0">☕</span>
              <span>
                <strong className="text-gold">Favourite order:</strong>{" "}
                {m.favouriteOrder}
              </span>
            </div>
          )}
          {m.funFact && (
            <div className="flex items-start gap-2 font-sans text-sm text-cream-muted">
              <span className="text-base flex-shrink-0">🌟</span>
              <span>
                <strong className="text-gold">Fun fact:</strong> {m.funFact}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ManagerCard({ member }: { member: Record<string, unknown> }) {
  const m = member;
  const initials = getInitials((m.name as string) ?? "");
  return (
    <div className="rounded-[var(--radius-lg)] overflow-hidden border border-gold/10 bg-charcoal-2 grid grid-cols-1 md:grid-cols-[300px_1fr] transition-[border-color,box-shadow] hover:border-gold/30 hover:shadow-xl relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-gold before:to-transparent">
      <div className="relative min-h-[160px] md:min-h-[260px] flex flex-col items-center justify-end p-6 md:p-8 bg-gradient-to-b from-charcoal-3 to-gold/[0.08]">
        {isMedia(m.photo) && (m.photo as { url?: string }).url ? (
          <MediaImage
            resource={m.photo as Parameters<typeof MediaImage>[0]["resource"]}
            fill
            className="object-cover"
            alt={(m.name as string) ?? ""}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-[0.12]">
            🏆
          </div>
        )}
        <div
          className="relative z-10 w-20 h-20 rounded-full border-2 border-gold/40 bg-gold/10 flex items-center justify-center font-display text-[1.8rem] text-gold mb-4"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          {initials}
        </div>
        <span className="relative z-10 font-sans text-[0.62rem] font-bold tracking-[0.18em] uppercase text-charcoal bg-gold px-2.5 py-1 rounded-sm">
          Manager
        </span>
      </div>
      <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <div className="font-display text-[1.7rem] text-cream mb-1">
            {m.name as string}
          </div>
          <div className="font-sans text-xs tracking-[0.12em] uppercase text-gold font-bold mb-4">
            {m.jobTitle as string}
          </div>
          <p className="font-sans text-sm text-cream-muted leading-7">
            {m.bio as string}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          {m.favouriteOrder ? (
            <div className="bg-charcoal-3 border border-gold/[0.08] rounded-sm p-4">
              <span className="cgcafe-label block mb-1">Favourite order</span>
              <p className="font-sans text-sm text-cream-muted leading-relaxed">
                {String(m.favouriteOrder)}
              </p>
            </div>
          ) : null}
          {m.funFact ? (
            <div className="bg-charcoal-3 border border-gold/[0.08] rounded-sm p-4">
              <span className="cgcafe-label block mb-1">Fun fact</span>
              <p className="font-sans text-sm text-cream-muted leading-relaxed">
                {String(m.funFact)}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function SupervisorCard({ member }: { member: Record<string, unknown> }) {
  const m = member;
  const initials = getInitials((m.name as string) ?? "");
  const facts: Array<{ label: string; value: string }> = [];
  if (m.favouriteOrder) facts.push({ label: "Order", value: m.favouriteOrder as string });
  if (m.funFact) facts.push({ label: "Fun fact", value: m.funFact as string });
  return (
    <div className="rounded-[var(--radius-lg)] overflow-hidden border border-gold/10 bg-charcoal-2 grid grid-cols-1 md:grid-cols-[260px_1fr] transition-[border-color,box-shadow] hover:border-gold/30 hover:shadow-xl">
      <div className="relative min-h-[140px] md:min-h-[240px] flex flex-col items-center justify-end p-6 md:p-8 bg-gradient-to-b from-charcoal-3 to-gold/[0.08]">
        {isMedia(m.photo) && (m.photo as { url?: string }).url ? (
          <MediaImage
            resource={m.photo as Parameters<typeof MediaImage>[0]["resource"]}
            fill
            className="object-cover"
            alt={(m.name as string) ?? ""}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-[0.12]">
            ⭐
          </div>
        )}
        <div
          className="relative z-10 w-16 h-16 rounded-full border-2 border-gold/35 bg-gold/[0.07] flex items-center justify-center font-display text-2xl text-gold mb-4"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          {initials}
        </div>
        <span className="relative z-10 font-sans text-[0.62rem] font-bold tracking-[0.18em] uppercase text-gold border border-gold/30 px-2.5 py-1 rounded-sm">
          Supervisor
        </span>
      </div>
      <div className="p-6 md:p-8">
        <div className="font-display text-2xl text-cream mb-1">
          {m.name as string}
        </div>
        <div className="font-sans text-xs tracking-[0.12em] uppercase text-gold font-bold mb-4">
          {m.jobTitle as string}
        </div>
        <p className="font-sans text-sm text-cream-muted leading-7 mb-6">
          {m.bio as string}
        </p>
        {facts.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {facts.map((f, i) => (
              <div
                key={i}
                className="bg-charcoal-3 border border-gold/[0.08] rounded px-3 py-2 flex items-center gap-2 font-sans text-[0.78rem] text-cream-muted"
              >
                <span>
                  <strong className="text-gold">{f.label}:</strong> {f.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CrewCard({ member }: { member: Record<string, unknown> }) {
  const m = member;
  const initials = getInitials((m.name as string) ?? "");
  return (
    <div className="rounded-[var(--radius-md)] overflow-hidden border border-gold/10 bg-charcoal-2 transition-[border-color,box-shadow,transform] hover:border-gold/28 hover:-translate-y-1 hover:shadow-xl cursor-default">
      <div className="aspect-[4/3] bg-gradient-to-b from-charcoal-3 to-gold/[0.07] flex flex-col items-center justify-center relative">
        {isMedia(m.photo) && (m.photo as { url?: string }).url ? (
          <MediaImage
            resource={m.photo as Parameters<typeof MediaImage>[0]["resource"]}
            fill
            className="object-cover"
            alt={(m.name as string) ?? ""}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-[0.18]">
            ☕
          </div>
        )}
        <div
          className="absolute left-1/2 bottom-6 -translate-x-1/2 w-14 h-14 rounded-full border border-gold/30 bg-gold/[0.07] flex items-center justify-center font-display text-xl text-gold"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          {initials}
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div className="font-display text-lg text-cream mb-0.5">{m.name as string}</div>
        <div className="font-sans text-[0.7rem] tracking-[0.12em] uppercase text-gold font-bold mb-4">
          {m.jobTitle as string}
        </div>
        <p className="font-sans text-[0.82rem] text-cream-muted leading-relaxed mb-5">
          {m.bio as string}
        </p>
        {m.favouriteOrder ? (
          <div className="flex items-center gap-2 font-sans text-[0.76rem] text-cream-muted bg-charcoal-3 rounded px-2.5 py-2 border border-gold/[0.07]">
            <span className="text-sm">☕</span>
            <strong className="text-gold">Goes for:</strong> {String(m.favouriteOrder)}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SectionLabelRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6 mb-12">
      <span className="cgcafe-label whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-gold/15" />
    </div>
  );
}

export async function TeamBlock({ settings }: TeamBlockProps) {
  const groups = await getTeamMembersGroupedByRole();
  const py = settings?.py ?? "medium";
  const sectionPy = SPACING[py as keyof typeof SPACING] ?? SPACING.medium;

  if (!groups.length) return null;

  return (
    <section
      id={settings?.anchor ?? undefined}
      className={cn("bg-charcoal", sectionPy)}
    >
      <div className="container">
        {groups.map((group) => (
          <div
            key={group.id}
            className={cn(
              group.value !== "owner" && "mt-0",
              group.value === "owner" && "pb-0",
              group.value === "manager" && "bg-charcoal-2 -mx-4 px-4 md:mx-0 md:px-0 py-8 md:py-12",
              group.value === "supervisor" && "py-8 md:py-12",
              group.value === "crew" && "py-8 md:py-12 bg-charcoal-2 -mx-4 px-4 md:mx-0 md:px-0 rounded-none"
            )}
          >
            <div className="container">
              <SectionLabelRow label={ROLE_LABELS[group.value] ?? group.label} />
              {group.value === "owner" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {group.members.map((m) => (
                    <OwnerCard key={m.id} member={m as never} />
                  ))}
                </div>
              )}
              {group.value === "manager" &&
                group.members.map((m) => (
                  <ManagerCard key={m.id} member={m as unknown as Record<string, unknown>} />
                ))}
              {group.value === "supervisor" &&
                group.members.map((m) => (
                  <SupervisorCard key={m.id} member={m as unknown as Record<string, unknown>} />
                ))}
              {group.value === "crew" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.members.map((m) => (
                    <CrewCard key={m.id} member={m as unknown as Record<string, unknown>} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
