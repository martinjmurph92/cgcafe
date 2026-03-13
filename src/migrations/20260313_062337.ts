import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_contact_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_cta_banner_button_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_banner_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_content_settings_width" AS ENUM('container', 'full', 'wide', 'narrow');
  CREATE TYPE "public"."enum_pages_blocks_content_settings_background_color" AS ENUM('none', 'white', 'light', 'primary', 'secondary', 'charcoal2', 'charcoal3');
  CREATE TYPE "public"."enum_pages_blocks_content_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_gallery_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_hours_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_intro_strip_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_menu_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_media_text_link_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_media_text_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_page_hero_links_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_page_hero_settings_width" AS ENUM('container', 'full', 'wide', 'narrow');
  CREATE TYPE "public"."enum_pages_blocks_page_hero_settings_background_color" AS ENUM('none', 'white', 'light', 'primary', 'secondary', 'charcoal2', 'charcoal3');
  CREATE TYPE "public"."enum_pages_blocks_page_hero_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_team_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_text_hero_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_banner_button_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_banner_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_content_settings_width" AS ENUM('container', 'full', 'wide', 'narrow');
  CREATE TYPE "public"."enum__pages_v_blocks_content_settings_background_color" AS ENUM('none', 'white', 'light', 'primary', 'secondary', 'charcoal2', 'charcoal3');
  CREATE TYPE "public"."enum__pages_v_blocks_content_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_hours_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_intro_strip_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_menu_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_link_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_page_hero_links_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_page_hero_settings_width" AS ENUM('container', 'full', 'wide', 'narrow');
  CREATE TYPE "public"."enum__pages_v_blocks_page_hero_settings_background_color" AS ENUM('none', 'white', 'light', 'primary', 'secondary', 'charcoal2', 'charcoal3');
  CREATE TYPE "public"."enum__pages_v_blocks_page_hero_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_team_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_text_hero_settings_py" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_menu_items_category" AS ENUM('breakfast', 'lunch', 'cakes-bakes', 'drinks', 'dinner');
  CREATE TYPE "public"."enum_team_members_role" AS ENUM('owner', 'manager', 'supervisor', 'crew');
  CREATE TYPE "public"."enum_exports_format" AS ENUM('csv', 'json');
  CREATE TYPE "public"."enum_exports_drafts" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_exports_selection_to_use" AS ENUM('currentSelection', 'currentFilters', 'all');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'createCollectionExport');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'createCollectionExport');
  CREATE TYPE "public"."enum_payload_query_presets_access_read_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_access_update_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_access_delete_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_related_collection" AS ENUM('media', 'pages', 'posts', 'form-submissions');
  CREATE TYPE "public"."enum_settings_blocks_link_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum_settings_blocks_sub_menu_links_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum_settings_header_cta_link_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__settings_v_blocks_link_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum__settings_v_blocks_sub_menu_links_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum__settings_v_version_header_cta_link_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum__settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_config_footer_services_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum_config_footer_solutions_link_type" AS ENUM('internal', 'custom');
  CREATE TYPE "public"."enum_config_footer_about_link_type" AS ENUM('internal', 'custom');
  CREATE TABLE "admins_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "admins" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"preferences_emails" boolean DEFAULT true,
  	"preferences_admin_bar" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"private" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar,
  	"sizes_landscape_url" varchar,
  	"sizes_landscape_width" numeric,
  	"sizes_landscape_height" numeric,
  	"sizes_landscape_mime_type" varchar,
  	"sizes_landscape_filesize" numeric,
  	"sizes_landscape_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Get in Touch',
  	"title" varchar DEFAULT 'We''d love to hear from you',
  	"rich_text" jsonb,
  	"settings_py" "enum_pages_blocks_contact_settings_py" DEFAULT 'large',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_link_type" "enum_pages_blocks_cta_banner_button_link_type" DEFAULT 'internal',
  	"button_new_tab" boolean,
  	"button_custom_link" varchar,
  	"button_label" varchar,
  	"settings_py" "enum_pages_blocks_cta_banner_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"settings_width" "enum_pages_blocks_content_settings_width" DEFAULT 'container',
  	"settings_background_color" "enum_pages_blocks_content_settings_background_color" DEFAULT 'none',
  	"settings_py" "enum_pages_blocks_content_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Gallery',
  	"title" varchar DEFAULT 'A taste of the atmosphere',
  	"settings_py" "enum_pages_blocks_gallery_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hours_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"day" varchar,
  	"time" varchar
  );
  
  CREATE TABLE "pages_blocks_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"hours_label" varchar DEFAULT 'Opening Hours',
  	"hours_title" varchar DEFAULT 'When we''re open',
  	"find_us_label" varchar DEFAULT 'Find Us',
  	"find_us_title" varchar DEFAULT 'Come say hello',
  	"address" varchar,
  	"phone" varchar,
  	"settings_py" "enum_pages_blocks_hours_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_intro_strip_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_intro_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_py" "enum_pages_blocks_intro_strip_settings_py" DEFAULT 'small',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_label" varchar DEFAULT 'Our Menu',
  	"heading_title" varchar DEFAULT 'Something for everyone',
  	"heading_description" varchar,
  	"settings_py" "enum_pages_blocks_menu_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_text_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"label" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"link_link_type" "enum_pages_blocks_media_text_link_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_custom_link" varchar,
  	"link_label" varchar,
  	"settings_py" "enum_pages_blocks_media_text_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"settings_reverse" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_page_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_page_hero_links_link_type" DEFAULT 'internal',
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_page_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow_label" varchar,
  	"eyebrow_label2" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"media_id" integer,
  	"settings_width" "enum_pages_blocks_page_hero_settings_width" DEFAULT 'wide',
  	"settings_background_color" "enum_pages_blocks_page_hero_settings_background_color" DEFAULT 'primary',
  	"settings_py" "enum_pages_blocks_page_hero_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_py" "enum_pages_blocks_team_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"stars" numeric DEFAULT 5,
  	"quote" varchar,
  	"author_initial" varchar,
  	"author_name" varchar,
  	"author_sub" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Reviews',
  	"title" varchar DEFAULT 'What our guests say',
  	"settings_py" "enum_pages_blocks_testimonials_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"settings_py" "enum_pages_blocks_text_hero_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"slug" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"deleted_at" timestamp(3) with time zone,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"pages_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_contact_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Get in Touch',
  	"title" varchar DEFAULT 'We''d love to hear from you',
  	"rich_text" jsonb,
  	"settings_py" "enum__pages_v_blocks_contact_settings_py" DEFAULT 'large',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_link_type" "enum__pages_v_blocks_cta_banner_button_link_type" DEFAULT 'internal',
  	"button_new_tab" boolean,
  	"button_custom_link" varchar,
  	"button_label" varchar,
  	"settings_py" "enum__pages_v_blocks_cta_banner_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"settings_width" "enum__pages_v_blocks_content_settings_width" DEFAULT 'container',
  	"settings_background_color" "enum__pages_v_blocks_content_settings_background_color" DEFAULT 'none',
  	"settings_py" "enum__pages_v_blocks_content_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Gallery',
  	"title" varchar DEFAULT 'A taste of the atmosphere',
  	"settings_py" "enum__pages_v_blocks_gallery_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hours_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"day" varchar,
  	"time" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"hours_label" varchar DEFAULT 'Opening Hours',
  	"hours_title" varchar DEFAULT 'When we''re open',
  	"find_us_label" varchar DEFAULT 'Find Us',
  	"find_us_title" varchar DEFAULT 'Come say hello',
  	"address" varchar,
  	"phone" varchar,
  	"settings_py" "enum__pages_v_blocks_hours_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_intro_strip_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_intro_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"settings_py" "enum__pages_v_blocks_intro_strip_settings_py" DEFAULT 'small',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_label" varchar DEFAULT 'Our Menu',
  	"heading_title" varchar DEFAULT 'Something for everyone',
  	"heading_description" varchar,
  	"settings_py" "enum__pages_v_blocks_menu_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_text_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"label" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"link_link_type" "enum__pages_v_blocks_media_text_link_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_custom_link" varchar,
  	"link_label" varchar,
  	"settings_py" "enum__pages_v_blocks_media_text_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"settings_reverse" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_page_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_page_hero_links_link_type" DEFAULT 'internal',
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_page_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow_label" varchar,
  	"eyebrow_label2" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"media_id" integer,
  	"settings_width" "enum__pages_v_blocks_page_hero_settings_width" DEFAULT 'wide',
  	"settings_background_color" "enum__pages_v_blocks_page_hero_settings_background_color" DEFAULT 'primary',
  	"settings_py" "enum__pages_v_blocks_page_hero_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"settings_py" "enum__pages_v_blocks_team_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"stars" numeric DEFAULT 5,
  	"quote" varchar,
  	"author_initial" varchar,
  	"author_name" varchar,
  	"author_sub" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Reviews',
  	"title" varchar DEFAULT 'What our guests say',
  	"settings_py" "enum__pages_v_blocks_testimonials_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"settings_py" "enum__pages_v_blocks_text_hero_settings_py" DEFAULT 'medium',
  	"settings_anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version_deleted_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"pages_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer,
  	"summary" varchar,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"slug" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"deleted_at" timestamp(3) with time zone,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_image_id" integer,
  	"version_summary" varchar,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version_deleted_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "menu_items" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"category" "enum_menu_items_category" NOT NULL,
  	"price" varchar NOT NULL,
  	"description" varchar,
  	"badge" varchar,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "team_members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"photo_id" integer,
  	"role" "enum_team_members_role" NOT NULL,
  	"job_title" varchar NOT NULL,
  	"bio" varchar NOT NULL,
  	"favourite_order" varchar,
  	"fun_fact" varchar,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"email" varchar,
  	"phone" varchar,
  	"message" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "exports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"format" "enum_exports_format" DEFAULT 'csv',
  	"limit" numeric,
  	"sort" varchar,
  	"drafts" "enum_exports_drafts" DEFAULT 'yes',
  	"selection_to_use" "enum_exports_selection_to_use",
  	"collection_slug" varchar NOT NULL,
  	"where" jsonb DEFAULT '{}'::jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "exports_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"admins_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"posts_id" integer,
  	"menu_items_id" integer,
  	"team_members_id" integer,
  	"form_submissions_id" integer,
  	"exports_id" integer,
  	"redirects_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"admins_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_query_presets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"is_shared" boolean DEFAULT false,
  	"access_read_constraint" "enum_payload_query_presets_access_read_constraint" DEFAULT 'onlyMe',
  	"access_update_constraint" "enum_payload_query_presets_access_update_constraint" DEFAULT 'onlyMe',
  	"access_delete_constraint" "enum_payload_query_presets_access_delete_constraint" DEFAULT 'onlyMe',
  	"where" jsonb,
  	"columns" jsonb,
  	"related_collection" "enum_payload_query_presets_related_collection" NOT NULL,
  	"is_temp" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_query_presets_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"admins_id" integer
  );
  
  CREATE TABLE "settings_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_settings_blocks_link_link_type" DEFAULT 'internal',
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "settings_blocks_sub_menu_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_settings_blocks_sub_menu_links_link_type" DEFAULT 'internal',
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "settings_blocks_sub_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"general_logo_id" integer,
  	"general_favicon_id" integer,
  	"seo_title" varchar,
  	"seo_title_separator" varchar DEFAULT '-',
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"integrations_google_tag_manager" varchar,
  	"integrations_google_analytics" varchar,
  	"integrations_custom_head" varchar,
  	"integrations_custom_body_open" varchar,
  	"integrations_custom_body_close" varchar,
  	"socials_linkedin" varchar,
  	"header_cta_link_link_type" "enum_settings_header_cta_link_link_type" DEFAULT 'internal',
  	"header_cta_link_new_tab" boolean,
  	"header_cta_link_custom_link" varchar,
  	"header_cta_link_label" varchar,
  	"footer_established" varchar,
  	"footer_tagline" varchar,
  	"footer_facebook" varchar,
  	"footer_instagram" varchar,
  	"_status" "enum_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "settings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"pages_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "_settings_v_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__settings_v_blocks_link_link_type" DEFAULT 'internal',
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_settings_v_blocks_sub_menu_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__settings_v_blocks_sub_menu_links_link_type" DEFAULT 'internal',
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_settings_v_blocks_sub_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_general_logo_id" integer,
  	"version_general_favicon_id" integer,
  	"version_seo_title" varchar,
  	"version_seo_title_separator" varchar DEFAULT '-',
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_integrations_google_tag_manager" varchar,
  	"version_integrations_google_analytics" varchar,
  	"version_integrations_custom_head" varchar,
  	"version_integrations_custom_body_open" varchar,
  	"version_integrations_custom_body_close" varchar,
  	"version_socials_linkedin" varchar,
  	"version_header_cta_link_link_type" "enum__settings_v_version_header_cta_link_link_type" DEFAULT 'internal',
  	"version_header_cta_link_new_tab" boolean,
  	"version_header_cta_link_custom_link" varchar,
  	"version_header_cta_link_label" varchar,
  	"version_footer_established" varchar,
  	"version_footer_tagline" varchar,
  	"version_footer_facebook" varchar,
  	"version_footer_instagram" varchar,
  	"version__status" "enum__settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_settings_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"pages_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "config_footer_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_config_footer_services_link_type" DEFAULT 'internal' NOT NULL,
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "config_footer_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_config_footer_solutions_link_type" DEFAULT 'internal' NOT NULL,
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "config_footer_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_config_footer_about_link_type" DEFAULT 'internal' NOT NULL,
  	"new_tab" boolean,
  	"custom_link" varchar,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "config" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_logo_id" integer NOT NULL,
  	"site_logo_dark_id" integer NOT NULL,
  	"site_email" varchar NOT NULL,
  	"site_phone" varchar NOT NULL,
  	"site_linkedin" varchar,
  	"site_github" varchar,
  	"site_title" varchar,
  	"site_image_id" integer,
  	"site_description" varchar,
  	"footer_summary" varchar,
  	"footer_footer_text" varchar,
  	"email_email_to" varchar NOT NULL,
  	"email_subject" varchar DEFAULT 'New Website Enquiry' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "config_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"pages_id" integer,
  	"media_id" integer
  );
  
  ALTER TABLE "admins_sessions" ADD CONSTRAINT "admins_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_details" ADD CONSTRAINT "pages_blocks_contact_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_banner" ADD CONSTRAINT "pages_blocks_cta_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hours_hours" ADD CONSTRAINT "pages_blocks_hours_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hours"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hours" ADD CONSTRAINT "pages_blocks_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_intro_strip_items" ADD CONSTRAINT "pages_blocks_intro_strip_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_intro_strip"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_intro_strip" ADD CONSTRAINT "pages_blocks_intro_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_menu" ADD CONSTRAINT "pages_blocks_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text_stats" ADD CONSTRAINT "pages_blocks_media_text_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text" ADD CONSTRAINT "pages_blocks_media_text_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text" ADD CONSTRAINT "pages_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_hero_links" ADD CONSTRAINT "pages_blocks_page_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_page_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_hero" ADD CONSTRAINT "pages_blocks_page_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_hero" ADD CONSTRAINT "pages_blocks_page_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_items" ADD CONSTRAINT "pages_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_hero" ADD CONSTRAINT "pages_blocks_text_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_details" ADD CONSTRAINT "_pages_v_blocks_contact_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact" ADD CONSTRAINT "_pages_v_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_banner" ADD CONSTRAINT "_pages_v_blocks_cta_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hours_hours" ADD CONSTRAINT "_pages_v_blocks_hours_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hours"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hours" ADD CONSTRAINT "_pages_v_blocks_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_intro_strip_items" ADD CONSTRAINT "_pages_v_blocks_intro_strip_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_intro_strip"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_intro_strip" ADD CONSTRAINT "_pages_v_blocks_intro_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_menu" ADD CONSTRAINT "_pages_v_blocks_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text_stats" ADD CONSTRAINT "_pages_v_blocks_media_text_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text" ADD CONSTRAINT "_pages_v_blocks_media_text_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text" ADD CONSTRAINT "_pages_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_hero_links" ADD CONSTRAINT "_pages_v_blocks_page_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_page_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_hero" ADD CONSTRAINT "_pages_v_blocks_page_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_hero" ADD CONSTRAINT "_pages_v_blocks_page_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team" ADD CONSTRAINT "_pages_v_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_items" ADD CONSTRAINT "_pages_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_hero" ADD CONSTRAINT "_pages_v_blocks_text_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_members" ADD CONSTRAINT "team_members_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "exports_texts" ADD CONSTRAINT "exports_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."exports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_menu_items_fk" FOREIGN KEY ("menu_items_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_members_fk" FOREIGN KEY ("team_members_id") REFERENCES "public"."team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_exports_fk" FOREIGN KEY ("exports_id") REFERENCES "public"."exports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_query_presets_rels" ADD CONSTRAINT "payload_query_presets_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_query_presets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_query_presets_rels" ADD CONSTRAINT "payload_query_presets_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_blocks_link" ADD CONSTRAINT "settings_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_blocks_sub_menu_links" ADD CONSTRAINT "settings_blocks_sub_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings_blocks_sub_menu"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_blocks_sub_menu" ADD CONSTRAINT "settings_blocks_sub_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_general_logo_id_media_id_fk" FOREIGN KEY ("general_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_general_favicon_id_media_id_fk" FOREIGN KEY ("general_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_settings_v_blocks_link" ADD CONSTRAINT "_settings_v_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_settings_v_blocks_sub_menu_links" ADD CONSTRAINT "_settings_v_blocks_sub_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_settings_v_blocks_sub_menu"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_settings_v_blocks_sub_menu" ADD CONSTRAINT "_settings_v_blocks_sub_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_settings_v" ADD CONSTRAINT "_settings_v_version_general_logo_id_media_id_fk" FOREIGN KEY ("version_general_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_settings_v" ADD CONSTRAINT "_settings_v_version_general_favicon_id_media_id_fk" FOREIGN KEY ("version_general_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_settings_v" ADD CONSTRAINT "_settings_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_settings_v_rels" ADD CONSTRAINT "_settings_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_settings_v_rels" ADD CONSTRAINT "_settings_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_settings_v_rels" ADD CONSTRAINT "_settings_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_settings_v_rels" ADD CONSTRAINT "_settings_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "config_footer_services" ADD CONSTRAINT "config_footer_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."config"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "config_footer_solutions" ADD CONSTRAINT "config_footer_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."config"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "config_footer_about" ADD CONSTRAINT "config_footer_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."config"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "config" ADD CONSTRAINT "config_site_logo_id_media_id_fk" FOREIGN KEY ("site_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "config" ADD CONSTRAINT "config_site_logo_dark_id_media_id_fk" FOREIGN KEY ("site_logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "config" ADD CONSTRAINT "config_site_image_id_media_id_fk" FOREIGN KEY ("site_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "config_rels" ADD CONSTRAINT "config_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."config"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "config_rels" ADD CONSTRAINT "config_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "config_rels" ADD CONSTRAINT "config_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "config_rels" ADD CONSTRAINT "config_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "admins_sessions_order_idx" ON "admins_sessions" USING btree ("_order");
  CREATE INDEX "admins_sessions_parent_id_idx" ON "admins_sessions" USING btree ("_parent_id");
  CREATE INDEX "admins_updated_at_idx" ON "admins" USING btree ("updated_at");
  CREATE INDEX "admins_created_at_idx" ON "admins" USING btree ("created_at");
  CREATE UNIQUE INDEX "admins_email_idx" ON "admins" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "media_sizes_landscape_sizes_landscape_filename_idx" ON "media" USING btree ("sizes_landscape_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "pages_blocks_contact_details_order_idx" ON "pages_blocks_contact_details" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_details_parent_id_idx" ON "pages_blocks_contact_details" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_parent_id_idx" ON "pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_path_idx" ON "pages_blocks_contact" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_banner_order_idx" ON "pages_blocks_cta_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_banner_parent_id_idx" ON "pages_blocks_cta_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_banner_path_idx" ON "pages_blocks_cta_banner" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_hours_hours_order_idx" ON "pages_blocks_hours_hours" USING btree ("_order");
  CREATE INDEX "pages_blocks_hours_hours_parent_id_idx" ON "pages_blocks_hours_hours" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hours_order_idx" ON "pages_blocks_hours" USING btree ("_order");
  CREATE INDEX "pages_blocks_hours_parent_id_idx" ON "pages_blocks_hours" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hours_path_idx" ON "pages_blocks_hours" USING btree ("_path");
  CREATE INDEX "pages_blocks_intro_strip_items_order_idx" ON "pages_blocks_intro_strip_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_intro_strip_items_parent_id_idx" ON "pages_blocks_intro_strip_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_intro_strip_order_idx" ON "pages_blocks_intro_strip" USING btree ("_order");
  CREATE INDEX "pages_blocks_intro_strip_parent_id_idx" ON "pages_blocks_intro_strip" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_intro_strip_path_idx" ON "pages_blocks_intro_strip" USING btree ("_path");
  CREATE INDEX "pages_blocks_menu_order_idx" ON "pages_blocks_menu" USING btree ("_order");
  CREATE INDEX "pages_blocks_menu_parent_id_idx" ON "pages_blocks_menu" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_menu_path_idx" ON "pages_blocks_menu" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_text_stats_order_idx" ON "pages_blocks_media_text_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_text_stats_parent_id_idx" ON "pages_blocks_media_text_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_text_order_idx" ON "pages_blocks_media_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_text_parent_id_idx" ON "pages_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_text_path_idx" ON "pages_blocks_media_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_text_media_idx" ON "pages_blocks_media_text" USING btree ("media_id");
  CREATE INDEX "pages_blocks_page_hero_links_order_idx" ON "pages_blocks_page_hero_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_page_hero_links_parent_id_idx" ON "pages_blocks_page_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_page_hero_order_idx" ON "pages_blocks_page_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_page_hero_parent_id_idx" ON "pages_blocks_page_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_page_hero_path_idx" ON "pages_blocks_page_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_page_hero_media_idx" ON "pages_blocks_page_hero" USING btree ("media_id");
  CREATE INDEX "pages_blocks_team_order_idx" ON "pages_blocks_team" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_parent_id_idx" ON "pages_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_path_idx" ON "pages_blocks_team" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_items_order_idx" ON "pages_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_items_parent_id_idx" ON "pages_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_hero_order_idx" ON "pages_blocks_text_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_hero_parent_id_idx" ON "pages_blocks_text_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_hero_path_idx" ON "pages_blocks_text_hero" USING btree ("_path");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages_deleted_at_idx" ON "pages" USING btree ("deleted_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_contact_details_order_idx" ON "_pages_v_blocks_contact_details" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_details_parent_id_idx" ON "_pages_v_blocks_contact_details" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_order_idx" ON "_pages_v_blocks_contact" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_parent_id_idx" ON "_pages_v_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_path_idx" ON "_pages_v_blocks_contact" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_banner_order_idx" ON "_pages_v_blocks_cta_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_banner_parent_id_idx" ON "_pages_v_blocks_cta_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_banner_path_idx" ON "_pages_v_blocks_cta_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_gallery_images_order_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_image_idx" ON "_pages_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hours_hours_order_idx" ON "_pages_v_blocks_hours_hours" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hours_hours_parent_id_idx" ON "_pages_v_blocks_hours_hours" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hours_order_idx" ON "_pages_v_blocks_hours" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hours_parent_id_idx" ON "_pages_v_blocks_hours" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hours_path_idx" ON "_pages_v_blocks_hours" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_intro_strip_items_order_idx" ON "_pages_v_blocks_intro_strip_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_intro_strip_items_parent_id_idx" ON "_pages_v_blocks_intro_strip_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_intro_strip_order_idx" ON "_pages_v_blocks_intro_strip" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_intro_strip_parent_id_idx" ON "_pages_v_blocks_intro_strip" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_intro_strip_path_idx" ON "_pages_v_blocks_intro_strip" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_menu_order_idx" ON "_pages_v_blocks_menu" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_menu_parent_id_idx" ON "_pages_v_blocks_menu" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_menu_path_idx" ON "_pages_v_blocks_menu" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_text_stats_order_idx" ON "_pages_v_blocks_media_text_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_text_stats_parent_id_idx" ON "_pages_v_blocks_media_text_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_text_order_idx" ON "_pages_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_text_parent_id_idx" ON "_pages_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_text_path_idx" ON "_pages_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_text_media_idx" ON "_pages_v_blocks_media_text" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_page_hero_links_order_idx" ON "_pages_v_blocks_page_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_page_hero_links_parent_id_idx" ON "_pages_v_blocks_page_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_page_hero_order_idx" ON "_pages_v_blocks_page_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_page_hero_parent_id_idx" ON "_pages_v_blocks_page_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_page_hero_path_idx" ON "_pages_v_blocks_page_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_page_hero_media_idx" ON "_pages_v_blocks_page_hero" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_team_order_idx" ON "_pages_v_blocks_team" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team_parent_id_idx" ON "_pages_v_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team_path_idx" ON "_pages_v_blocks_team" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials_items_order_idx" ON "_pages_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_items_parent_id_idx" ON "_pages_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_text_hero_order_idx" ON "_pages_v_blocks_text_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_hero_parent_id_idx" ON "_pages_v_blocks_text_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_hero_path_idx" ON "_pages_v_blocks_text_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version_deleted_at_idx" ON "_pages_v" USING btree ("version_deleted_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_media_id_idx" ON "_pages_v_rels" USING btree ("media_id");
  CREATE INDEX "posts_image_idx" ON "posts" USING btree ("image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts_deleted_at_idx" ON "posts" USING btree ("deleted_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_image_idx" ON "_posts_v" USING btree ("version_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version_deleted_at_idx" ON "_posts_v" USING btree ("version_deleted_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "menu_items_updated_at_idx" ON "menu_items" USING btree ("updated_at");
  CREATE INDEX "menu_items_created_at_idx" ON "menu_items" USING btree ("created_at");
  CREATE INDEX "team_members_photo_idx" ON "team_members" USING btree ("photo_id");
  CREATE INDEX "team_members_updated_at_idx" ON "team_members" USING btree ("updated_at");
  CREATE INDEX "team_members_created_at_idx" ON "team_members" USING btree ("created_at");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "exports_updated_at_idx" ON "exports" USING btree ("updated_at");
  CREATE INDEX "exports_created_at_idx" ON "exports" USING btree ("created_at");
  CREATE UNIQUE INDEX "exports_filename_idx" ON "exports" USING btree ("filename");
  CREATE INDEX "exports_texts_order_parent_idx" ON "exports_texts" USING btree ("order","parent_id");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_admins_id_idx" ON "payload_locked_documents_rels" USING btree ("admins_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_menu_items_id_idx" ON "payload_locked_documents_rels" USING btree ("menu_items_id");
  CREATE INDEX "payload_locked_documents_rels_team_members_id_idx" ON "payload_locked_documents_rels" USING btree ("team_members_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_exports_id_idx" ON "payload_locked_documents_rels" USING btree ("exports_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_admins_id_idx" ON "payload_preferences_rels" USING btree ("admins_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "payload_query_presets_updated_at_idx" ON "payload_query_presets" USING btree ("updated_at");
  CREATE INDEX "payload_query_presets_created_at_idx" ON "payload_query_presets" USING btree ("created_at");
  CREATE INDEX "payload_query_presets_rels_order_idx" ON "payload_query_presets_rels" USING btree ("order");
  CREATE INDEX "payload_query_presets_rels_parent_idx" ON "payload_query_presets_rels" USING btree ("parent_id");
  CREATE INDEX "payload_query_presets_rels_path_idx" ON "payload_query_presets_rels" USING btree ("path");
  CREATE INDEX "payload_query_presets_rels_admins_id_idx" ON "payload_query_presets_rels" USING btree ("admins_id");
  CREATE INDEX "settings_blocks_link_order_idx" ON "settings_blocks_link" USING btree ("_order");
  CREATE INDEX "settings_blocks_link_parent_id_idx" ON "settings_blocks_link" USING btree ("_parent_id");
  CREATE INDEX "settings_blocks_link_path_idx" ON "settings_blocks_link" USING btree ("_path");
  CREATE INDEX "settings_blocks_sub_menu_links_order_idx" ON "settings_blocks_sub_menu_links" USING btree ("_order");
  CREATE INDEX "settings_blocks_sub_menu_links_parent_id_idx" ON "settings_blocks_sub_menu_links" USING btree ("_parent_id");
  CREATE INDEX "settings_blocks_sub_menu_order_idx" ON "settings_blocks_sub_menu" USING btree ("_order");
  CREATE INDEX "settings_blocks_sub_menu_parent_id_idx" ON "settings_blocks_sub_menu" USING btree ("_parent_id");
  CREATE INDEX "settings_blocks_sub_menu_path_idx" ON "settings_blocks_sub_menu" USING btree ("_path");
  CREATE INDEX "settings_general_general_logo_idx" ON "settings" USING btree ("general_logo_id");
  CREATE INDEX "settings_general_general_favicon_idx" ON "settings" USING btree ("general_favicon_id");
  CREATE INDEX "settings_seo_seo_image_idx" ON "settings" USING btree ("seo_image_id");
  CREATE INDEX "settings__status_idx" ON "settings" USING btree ("_status");
  CREATE INDEX "settings_rels_order_idx" ON "settings_rels" USING btree ("order");
  CREATE INDEX "settings_rels_parent_idx" ON "settings_rels" USING btree ("parent_id");
  CREATE INDEX "settings_rels_path_idx" ON "settings_rels" USING btree ("path");
  CREATE INDEX "settings_rels_posts_id_idx" ON "settings_rels" USING btree ("posts_id");
  CREATE INDEX "settings_rels_pages_id_idx" ON "settings_rels" USING btree ("pages_id");
  CREATE INDEX "settings_rels_media_id_idx" ON "settings_rels" USING btree ("media_id");
  CREATE INDEX "_settings_v_blocks_link_order_idx" ON "_settings_v_blocks_link" USING btree ("_order");
  CREATE INDEX "_settings_v_blocks_link_parent_id_idx" ON "_settings_v_blocks_link" USING btree ("_parent_id");
  CREATE INDEX "_settings_v_blocks_link_path_idx" ON "_settings_v_blocks_link" USING btree ("_path");
  CREATE INDEX "_settings_v_blocks_sub_menu_links_order_idx" ON "_settings_v_blocks_sub_menu_links" USING btree ("_order");
  CREATE INDEX "_settings_v_blocks_sub_menu_links_parent_id_idx" ON "_settings_v_blocks_sub_menu_links" USING btree ("_parent_id");
  CREATE INDEX "_settings_v_blocks_sub_menu_order_idx" ON "_settings_v_blocks_sub_menu" USING btree ("_order");
  CREATE INDEX "_settings_v_blocks_sub_menu_parent_id_idx" ON "_settings_v_blocks_sub_menu" USING btree ("_parent_id");
  CREATE INDEX "_settings_v_blocks_sub_menu_path_idx" ON "_settings_v_blocks_sub_menu" USING btree ("_path");
  CREATE INDEX "_settings_v_version_general_version_general_logo_idx" ON "_settings_v" USING btree ("version_general_logo_id");
  CREATE INDEX "_settings_v_version_general_version_general_favicon_idx" ON "_settings_v" USING btree ("version_general_favicon_id");
  CREATE INDEX "_settings_v_version_seo_version_seo_image_idx" ON "_settings_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_settings_v_version_version__status_idx" ON "_settings_v" USING btree ("version__status");
  CREATE INDEX "_settings_v_created_at_idx" ON "_settings_v" USING btree ("created_at");
  CREATE INDEX "_settings_v_updated_at_idx" ON "_settings_v" USING btree ("updated_at");
  CREATE INDEX "_settings_v_latest_idx" ON "_settings_v" USING btree ("latest");
  CREATE INDEX "_settings_v_autosave_idx" ON "_settings_v" USING btree ("autosave");
  CREATE INDEX "_settings_v_rels_order_idx" ON "_settings_v_rels" USING btree ("order");
  CREATE INDEX "_settings_v_rels_parent_idx" ON "_settings_v_rels" USING btree ("parent_id");
  CREATE INDEX "_settings_v_rels_path_idx" ON "_settings_v_rels" USING btree ("path");
  CREATE INDEX "_settings_v_rels_posts_id_idx" ON "_settings_v_rels" USING btree ("posts_id");
  CREATE INDEX "_settings_v_rels_pages_id_idx" ON "_settings_v_rels" USING btree ("pages_id");
  CREATE INDEX "_settings_v_rels_media_id_idx" ON "_settings_v_rels" USING btree ("media_id");
  CREATE INDEX "config_footer_services_order_idx" ON "config_footer_services" USING btree ("_order");
  CREATE INDEX "config_footer_services_parent_id_idx" ON "config_footer_services" USING btree ("_parent_id");
  CREATE INDEX "config_footer_solutions_order_idx" ON "config_footer_solutions" USING btree ("_order");
  CREATE INDEX "config_footer_solutions_parent_id_idx" ON "config_footer_solutions" USING btree ("_parent_id");
  CREATE INDEX "config_footer_about_order_idx" ON "config_footer_about" USING btree ("_order");
  CREATE INDEX "config_footer_about_parent_id_idx" ON "config_footer_about" USING btree ("_parent_id");
  CREATE INDEX "config_site_site_logo_idx" ON "config" USING btree ("site_logo_id");
  CREATE INDEX "config_site_site_logo_dark_idx" ON "config" USING btree ("site_logo_dark_id");
  CREATE INDEX "config_site_site_image_idx" ON "config" USING btree ("site_image_id");
  CREATE INDEX "config_rels_order_idx" ON "config_rels" USING btree ("order");
  CREATE INDEX "config_rels_parent_idx" ON "config_rels" USING btree ("parent_id");
  CREATE INDEX "config_rels_path_idx" ON "config_rels" USING btree ("path");
  CREATE INDEX "config_rels_posts_id_idx" ON "config_rels" USING btree ("posts_id");
  CREATE INDEX "config_rels_pages_id_idx" ON "config_rels" USING btree ("pages_id");
  CREATE INDEX "config_rels_media_id_idx" ON "config_rels" USING btree ("media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "admins_sessions" CASCADE;
  DROP TABLE "admins" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_blocks_contact_details" CASCADE;
  DROP TABLE "pages_blocks_contact" CASCADE;
  DROP TABLE "pages_blocks_cta_banner" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_hours_hours" CASCADE;
  DROP TABLE "pages_blocks_hours" CASCADE;
  DROP TABLE "pages_blocks_intro_strip_items" CASCADE;
  DROP TABLE "pages_blocks_intro_strip" CASCADE;
  DROP TABLE "pages_blocks_menu" CASCADE;
  DROP TABLE "pages_blocks_media_text_stats" CASCADE;
  DROP TABLE "pages_blocks_media_text" CASCADE;
  DROP TABLE "pages_blocks_page_hero_links" CASCADE;
  DROP TABLE "pages_blocks_page_hero" CASCADE;
  DROP TABLE "pages_blocks_team" CASCADE;
  DROP TABLE "pages_blocks_testimonials_items" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_text_hero" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_details" CASCADE;
  DROP TABLE "_pages_v_blocks_contact" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_hours_hours" CASCADE;
  DROP TABLE "_pages_v_blocks_hours" CASCADE;
  DROP TABLE "_pages_v_blocks_intro_strip_items" CASCADE;
  DROP TABLE "_pages_v_blocks_intro_strip" CASCADE;
  DROP TABLE "_pages_v_blocks_menu" CASCADE;
  DROP TABLE "_pages_v_blocks_media_text_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_media_text" CASCADE;
  DROP TABLE "_pages_v_blocks_page_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_page_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_team" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_text_hero" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "menu_items" CASCADE;
  DROP TABLE "team_members" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "exports" CASCADE;
  DROP TABLE "exports_texts" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "payload_query_presets" CASCADE;
  DROP TABLE "payload_query_presets_rels" CASCADE;
  DROP TABLE "settings_blocks_link" CASCADE;
  DROP TABLE "settings_blocks_sub_menu_links" CASCADE;
  DROP TABLE "settings_blocks_sub_menu" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TABLE "settings_rels" CASCADE;
  DROP TABLE "_settings_v_blocks_link" CASCADE;
  DROP TABLE "_settings_v_blocks_sub_menu_links" CASCADE;
  DROP TABLE "_settings_v_blocks_sub_menu" CASCADE;
  DROP TABLE "_settings_v" CASCADE;
  DROP TABLE "_settings_v_rels" CASCADE;
  DROP TABLE "config_footer_services" CASCADE;
  DROP TABLE "config_footer_solutions" CASCADE;
  DROP TABLE "config_footer_about" CASCADE;
  DROP TABLE "config" CASCADE;
  DROP TABLE "config_rels" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_contact_settings_py";
  DROP TYPE "public"."enum_pages_blocks_cta_banner_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_banner_settings_py";
  DROP TYPE "public"."enum_pages_blocks_content_settings_width";
  DROP TYPE "public"."enum_pages_blocks_content_settings_background_color";
  DROP TYPE "public"."enum_pages_blocks_content_settings_py";
  DROP TYPE "public"."enum_pages_blocks_gallery_settings_py";
  DROP TYPE "public"."enum_pages_blocks_hours_settings_py";
  DROP TYPE "public"."enum_pages_blocks_intro_strip_settings_py";
  DROP TYPE "public"."enum_pages_blocks_menu_settings_py";
  DROP TYPE "public"."enum_pages_blocks_media_text_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_media_text_settings_py";
  DROP TYPE "public"."enum_pages_blocks_page_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_page_hero_settings_width";
  DROP TYPE "public"."enum_pages_blocks_page_hero_settings_background_color";
  DROP TYPE "public"."enum_pages_blocks_page_hero_settings_py";
  DROP TYPE "public"."enum_pages_blocks_team_settings_py";
  DROP TYPE "public"."enum_pages_blocks_testimonials_settings_py";
  DROP TYPE "public"."enum_pages_blocks_text_hero_settings_py";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_contact_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_cta_banner_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_banner_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_content_settings_width";
  DROP TYPE "public"."enum__pages_v_blocks_content_settings_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_content_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_hours_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_intro_strip_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_menu_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_page_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_page_hero_settings_width";
  DROP TYPE "public"."enum__pages_v_blocks_page_hero_settings_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_page_hero_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_team_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_settings_py";
  DROP TYPE "public"."enum__pages_v_blocks_text_hero_settings_py";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_menu_items_category";
  DROP TYPE "public"."enum_team_members_role";
  DROP TYPE "public"."enum_exports_format";
  DROP TYPE "public"."enum_exports_drafts";
  DROP TYPE "public"."enum_exports_selection_to_use";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_payload_query_presets_access_read_constraint";
  DROP TYPE "public"."enum_payload_query_presets_access_update_constraint";
  DROP TYPE "public"."enum_payload_query_presets_access_delete_constraint";
  DROP TYPE "public"."enum_payload_query_presets_related_collection";
  DROP TYPE "public"."enum_settings_blocks_link_link_type";
  DROP TYPE "public"."enum_settings_blocks_sub_menu_links_link_type";
  DROP TYPE "public"."enum_settings_header_cta_link_link_type";
  DROP TYPE "public"."enum_settings_status";
  DROP TYPE "public"."enum__settings_v_blocks_link_link_type";
  DROP TYPE "public"."enum__settings_v_blocks_sub_menu_links_link_type";
  DROP TYPE "public"."enum__settings_v_version_header_cta_link_link_type";
  DROP TYPE "public"."enum__settings_v_version_status";
  DROP TYPE "public"."enum_config_footer_services_link_type";
  DROP TYPE "public"."enum_config_footer_solutions_link_type";
  DROP TYPE "public"."enum_config_footer_about_link_type";`)
}
