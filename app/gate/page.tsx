"use client";
import Layout from "../../components/Layout/page";
import FotoBox from "../../components/CameraBox/page";
import CameraBox from "../../components/CameraBox/page";
import InfoBox from "../../components/InfoBox/page";

export default function GatePage() {
  return (
    <Layout>
      <div className="w-full flex flex-row gap-4">
        <div className="w-2/3 flex flex-col p-4 gap-4 bg-yellow-500 border-yellow-400 border rounded-lg">
          <div className="w-full flex flex-row gap-4">
            <div className="w-1/2">
              <FotoBox label="Foto Sopir" />
            </div>
            <div className="w-1/2">
              <CameraBox label="Kamera Sopir" />
            </div>
          </div>
          <InfoBox label="Nama Supir" />
          <div className="w-full flex flex-row gap-4">
            <div className="w-1/2">
              <FotoBox label="Foto Plat Truck" />
            </div>
            <div className="w-1/2">
              <CameraBox label="Kamera Plat Truck" />
            </div>
          </div>
          <InfoBox label="No Kendaraan" />
        </div>
        <div className="w-1/3 flex flex-col gap-4 p-4 bg-yellow-500 border-yellow-400 border rounded-lg">
          <CameraBox label="Kamera Container Belakang" />
          <InfoBox label="No Container Belakang" />
          <CameraBox label="Kamera Container Depan" />
          <InfoBox label="No Container Depan" />
        </div>
      </div>
    </Layout>
  );
}
