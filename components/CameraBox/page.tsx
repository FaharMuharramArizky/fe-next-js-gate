"use client";

interface CameraBoxProps {
    label: string;
    height?: string; // bisa custom tinggi
}

export default function CameraBox({ label, height = "min-h-[280px] max-h-[280px]" }: CameraBoxProps) {
    return (
        <div className="w-full bg-black rounded-lg text-white">
            <div className={`w-full flex justify-center items-center text-center ${height}`}>
                <p>{label}</p>
            </div>
        </div>
    );
}
