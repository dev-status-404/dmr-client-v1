"use client";
import AuthShell from "@/components/layout/auth/auth-shell";
import AuthCard from "@/components/layout/auth/auth-card";
import SignInForm from "@/features/auth/signin/form";


export default function SignInPage() {
  return (
    <AuthShell>
      <AuthCard>
        <p className="text-sm text-muted-foreground dark:text-white/70">Welcome back</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Account Access</h1>
        <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">
          Access your dashboard and redeem history.
        </p>

        <div className="mt-6 space-y-3">
          {/* <GoogleButton onClick={() => console.log("google")} /> */}
          {/* <div className="relative py-2">
            <div className="h-px w-full bg-border/70" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground dark:bg-transparent">
              or
            </span>
          </div> */}
        </div>

        <SignInForm />
      </AuthCard>
    </AuthShell>
  );
}
