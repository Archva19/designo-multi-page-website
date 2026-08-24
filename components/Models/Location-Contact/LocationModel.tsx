export default function LocationModel({
  locTitle,
  locInfo,
  contactTitle,
  contactPhone,
  contactMail,
}: {
  locTitle: string;
  locInfo: string;
  contactTitle: string;
  contactPhone: string;
  contactMail: string;
}) {
  return (
    <>
      <div className="w-full flex flex-col gap-10 text-center md:flex-row md:gap-2.5 md:text-left xl:gap-7.5">
        <div className="w-full flex flex-col items-center md:items-start xl:w-87.5">
          <p className="font-bold leading-6.5">{locTitle}</p>
          <p className="max-w-57 font-normal">{locInfo}</p>
        </div>
        <div className="w-full flex flex-col items-center md:items-start xl:w-87.5">
          <p className="font-bold leading-6.5">{contactTitle}</p>
          <p className="font-normal">{contactPhone}</p>
          <p className="font-normal">{contactMail}</p>
        </div>
      </div>
    </>
  );
}
