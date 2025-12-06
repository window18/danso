export const Layout1Plus3 = ({ cameras }: { cameras: CameraTemplate[] }) => (
  <div className="grid grid-cols-3 gap-4 h-full">
    <div className="col-span-2 row-span-2 bg-gray-700 rounded-lg flex items-center text-white text-2xl">
      {cameras[0]?.template || cameras[0]?.name}
    </div>
    {cameras.slice(1, 4).map((cam, i) => (
      <div key={i} className="bg-gray-700 rounded-lg flex-center text-white">
        {cam.template || cam.name}
      </div>
    ))}
  </div>
);
