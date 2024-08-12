import Image from "next/image";
import screen from "../../../public/images/screen.jpeg";

export default function Presentation() {
    return (
        <section className="flex h-screen w-screen bg-black relative">
            <Image
                src={screen}
                alt="Uma sala conjugada com cozinha, um ambiente aconchegante em tons de madeira e cores suaves."
                fill={true}
                className="object-cover opacity-65"
            />
        </section>
    );
}
