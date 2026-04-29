interface StatusBadgeProps {
    status: string;
}

export default function StatusBadge({
    status,
}: StatusBadgeProps) {
    const getStyles = () => {
        switch (status) {
            case "APPLIED":
                return "bg-yellow-500/20 text-yellow-400";

            case "SANCTIONED":
                return "bg-blue-500/20 text-blue-400";

            case "DISBURSED":
                return "bg-cyan-500/20 text-cyan-400";

            case "CLOSED":
                return "bg-green-500/20 text-green-400";

            case "REJECTED":
                return "bg-red-500/20 text-red-400";

            default:
                return "bg-gray-500/20 text-gray-400";
        }
    };

    return (
        <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${getStyles()}`}
        >
            {status}
        </span>
    );
}