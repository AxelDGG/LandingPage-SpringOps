import { LayoutDashboard, Target, Users, BarChart3 } from "lucide-react";

export const features = [
  {
    title: "Sprint Planning",
    description: "Easily plan your next sprint with drag-and-drop prioritization and story point estimation.",
    icon: Target,
  },
  {
    title: "Kanban Board",
    description: "Visualize workflow, track task status, and identify bottlenecks in real-time.",
    icon: LayoutDashboard,
  },
  {
    title: "Daily Standups",
    description: "Automate daily updates, identify blockers early, and keep everyone aligned.",
    icon: Users,
  },
  {
    title: "Metrics Dashboard",
    description: "Make data-driven decisions with real-time velocity, burn-down, and cycle time metrics.",
    icon: BarChart3,
  },
];

export const metrics = [
  { value: "+20%", label: "Productivity", description: "Increase in delivery speed" },
  { value: "-30%", label: "Lost Time", description: "Reduction in context switching" },
  { value: "+100%", label: "Visibility", description: "Clear cross-team alignment" },
];

export const howItWorksSteps = [
  { title: "Create Your Project", description: "Set up your workspace and invite your team in seconds." },
  { title: "Plan Your Sprint", description: "Define goals, add tasks, and assign them to team members." },
  { title: "Track Tasks", description: "Move work across customized workflow stages." },
  { title: "Analyze Performance", description: "Review metrics and optimize for the next sprint." },
];

export const testimonials = [
  {
    name: "Alex Dev",
    role: "Senior Frontend Developer",
    company: "TechFlow",
    text: "Oracle SprintOps changed the way we work. We finally have full visibility over our agile sprints.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Maria Stark",
    role: "Product Owner",
    company: "BuildIt",
    text: "The metrics dashboard is a game changer. We increased our delivery speed by 25% in the first month.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "John Doe",
    role: "Scrum Master",
    company: "SaaS Inc.",
    text: "Daily standups are no longer a chore. Everyone is aligned, and blockers are resolved almost instantly.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];
