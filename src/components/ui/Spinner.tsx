import { Loader } from "lucide-react";

export default function Spinner({ size = 24 }: { size?: number }) {
  return (
    <div className="flex justify-center items-center">
      <Loader className="animate-spin" size={size} />
    </div>
  );
}
