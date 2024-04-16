import Image from "next/image";
import { Users } from "@/users";
import WizardCards from "./components/WizardCards"

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="flex-auto bg-gradient-to-b from-violet-600 to-stone-900">
        <div className="text-white pt-16 text-[40px] font-bold text-center">
          <span>WELCOME TO WIZARDS WEBSITE</span>
        </div>
        <div className="grid grid-cols-4 text-center gap-4 mx-16">
          {
            Users.map((user) => (
              <WizardCards
              key = {user.id}
              firstName = {user.firstName}/>
            ))
          }
        </div>
      </div>
    </main>
  );
}
