"use client";

interface InfoBoxProps {
    label: string;
    height?: string;
}

export default function InfoBox({ label, height = "min-h-[30px] max-h-[50px]" }: InfoBoxProps) {
    return (
        <div className="w-full bg-white rounded-lg text-black p-2">
            <div className={`w-full flex justify-center items-center text-center ${height}`}>
                <p>{label}</p>
            </div>
        </div>
    );
}
