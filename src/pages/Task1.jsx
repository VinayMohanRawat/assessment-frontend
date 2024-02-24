import Component1 from "../components/Component_1.jsx";

export default function Task1() {

    return <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] gap-y-2 p-2 bg-black">
        <Component1 />
        <div className="bg-neutral-700  text-center font-extrabold text-2xl text-white">Component 2</div>
        <div className="col-span-2 bg-neutral-700  text-center font-extrabold text-2xl text-white">Componant 3</div>
    </div>
}