import { DarkModeToggle } from "./DarkModeToggle";
import { Logo } from "./Logo";
import { UserButton } from "./UserButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex sm:justify-between flex-col sm:flex-row items-center p-4 gap-0.5 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className=" flex items-center justify-end space-x-4 ">
          {/* LanguageSelect */}

          {/* Session && (

          ) */}

          <DarkModeToggle />

          <UserButton />
        </div>
      </nav>

      {/* Upgrade Banner */}
    </header>
  );
}
