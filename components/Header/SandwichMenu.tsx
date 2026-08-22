import Image from "next/image";

export default function SandwichMenu({
  isOpen,
  handleOnClick,
}: {
  isOpen: boolean;
  handleOnClick: () => void;
}) {
  return (
    <>
      <button onClick={handleOnClick}>
        {isOpen ? (
          <Image src="icons/close.svg" alt="close" width="20" height="20" />
        ) : (
          <Image src="icons/sandwich.svg" alt="menu" width="24" height="20" />
        )}
      </button>
    </>
  );
}
