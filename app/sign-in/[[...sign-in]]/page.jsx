import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <SignIn
        appearance={{
          elements: {
            rootBox: 'shadow-lg rounded-lg',
          },
        }}
      />
    </div>

  );
}