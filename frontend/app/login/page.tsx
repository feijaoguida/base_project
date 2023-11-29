import MainLogo from '@/app/ui/main-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-cover bg-[url('/h1_hero_invert.png')]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-themebase-500 p-3 md:h-36">
          <div className="w-64 text-white md:w-64">
            <MainLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}