import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
	BarChart2,
	Briefcase,
	ClipboardList,
	Code2,
	FileQuestion,
	FlaskConical,
	Globe2,
	GraduationCap,
	HeartPulse,
	Megaphone,
	Scale,
	Shield,
	ShoppingCart,
	Tag,
	User,
	Users,
} from "lucide-react";
import type { FC } from "react";

/**
 * Maps agent category (snake_case) to icon and label.
 */
export const CATEGORY_ICON_MAP: Record<
	string,
	{ icon: React.ReactNode; label: string }
> = {
	investment: {
		icon: <Briefcase size={14} style={{ marginRight: 4 }} />,
		label: "Investment",
	},
	accounting: {
		icon: <Briefcase size={14} style={{ marginRight: 4 }} />,
		label: "Accounting",
	},
	healthcare: {
		icon: <HeartPulse size={14} style={{ marginRight: 4 }} />,
		label: "Healthcare",
	},
	legal: {
		icon: <Scale size={14} style={{ marginRight: 4 }} />,
		label: "Legal",
	},
	software: {
		icon: <Code2 size={14} style={{ marginRight: 4 }} />,
		label: "Software",
	},
	security: {
		icon: <Shield size={14} style={{ marginRight: 4 }} />,
		label: "Security",
	},
	role_play: {
		icon: <Users size={14} style={{ marginRight: 4 }} />,
		label: "Role Play",
	},
	personal_assistance: {
		icon: <User size={14} style={{ marginRight: 4 }} />,
		label: "Personal Assistance",
	},
	education: {
		icon: <GraduationCap size={14} style={{ marginRight: 4 }} />,
		label: "Education",
	},
	marketing: {
		icon: <Megaphone size={14} style={{ marginRight: 4 }} />,
		label: "Marketing",
	},
	sales: {
		icon: <ShoppingCart size={14} style={{ marginRight: 4 }} />,
		label: "Sales",
	},
	research: {
		icon: <FlaskConical size={14} style={{ marginRight: 4 }} />,
		label: "Research",
	},
	analysis: {
		icon: <BarChart2 size={14} style={{ marginRight: 4 }} />,
		label: "Analysis",
	},
	management: {
		icon: <ClipboardList size={14} style={{ marginRight: 4 }} />,
		label: "Management",
	},
	social_media: {
		icon: <Globe2 size={14} style={{ marginRight: 4 }} />,
		label: "Social Media",
	},
	other: {
		icon: <FileQuestion size={14} style={{ marginRight: 4 }} />,
		label: "Other",
	},
};

/**
 * Converts snake_case to Normal Upper Case with spaces.
 */
function formatLabel(str: string): string {
	return str
		.split("_")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");
}

const PillsContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexWrap: "wrap",
	gap: theme.spacing(0.75),
	marginTop: theme.spacing(0.5),
	marginBottom: theme.spacing(1),
	alignItems: "center",
	overflow: "hidden",
	position: "relative",
}));

const CategoryPill = styled(Box)(({ theme }) => ({
	display: "inline-flex",
	alignItems: "center",
	borderRadius: 12,
	border: `1px solid ${theme.palette.divider}`,
	background:
		theme.palette.mode === "dark"
			? theme.palette.action.selected
			: theme.palette.action.hover,
	color: theme.palette.text.secondary,
	fontSize: "0.75rem",
	fontWeight: 500,
	padding: "2px 10px 2px 6px",
	minHeight: 22,
	lineHeight: 1.2,
	letterSpacing: 0.01,
	transition: "background 0.2s",
}));

const TagPill = styled(Box)(({ theme }) => ({
	display: "inline-flex",
	alignItems: "center",
	borderRadius: 12,
	border: `1px solid ${theme.palette.divider}`,
	background:
		theme.palette.mode === "dark"
			? theme.palette.action.selected
			: theme.palette.action.hover,
	color: theme.palette.text.disabled,
	fontSize: "0.75rem",
	fontWeight: 400,
	padding: "2px 10px 2px 8px",
	minHeight: 22,
	lineHeight: 1.2,
	letterSpacing: 0.01,
	transition: "background 0.2s",
}));

type AgentTagsAndCategoriesProps = {
	tags?: string[];
	categories?: string[];
	className?: string;
};

/**
 * Minimal, theme-aware, display-only pills for agent tags and categories.
 *
 * @param tags - Optional array of tag strings to display.
 * @param categories - Optional array of category strings to display.
 * @param className - Optional className for styling.
 * @returns React element with pills for tags and categories, or null if none provided.
 */
export const AgentTagsAndCategories: FC<AgentTagsAndCategoriesProps> = ({
	tags,
	categories,
	className,
}) => {
	if (
		(!tags || tags.length === 0) &&
		(!categories || categories.length === 0)
	) {
		return null;
	}

	return (
		<PillsContainer
			className={className}
			data-testid="agent-tags-and-categories"
		>
			{categories?.map((cat) => {
				const entry = CATEGORY_ICON_MAP[cat] || {
					icon: <Tag size={14} style={{ marginRight: 4 }} />,
					label: formatLabel(cat),
				};
				return (
					<CategoryPill key={cat}>
						{entry.icon}
						{entry.label}
					</CategoryPill>
				);
			})}
			{tags?.map((tag) => (
				<TagPill key={tag}>
					<Tag size={12} style={{ marginRight: 4, opacity: 0.7 }} />
					{formatLabel(tag)}
				</TagPill>
			))}
		</PillsContainer>
	);
};
