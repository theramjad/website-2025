import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchase Complete - AI Startup School",
  alternates: {
    canonical: "/ai-startup-school/success",
  },
  robots: {
    index: false,
  },
};

export default function PurchaseComplete() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div className="flex flex-col items-center space-y-6">
          {/* Success Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Payment Successful!
          </h1>

          <div className="text-center space-y-4">
            <p className="text-gray-600">
              An invite has been sent to the email you used at checkout to create your account on Skool.
            </p>

            <p className="text-gray-600">
              Check your inbox (and spam folder) for the invite link to join the community.
            </p>

            <div className="pt-4">
              <a
                href="https://www.skool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Go to Skool
              </a>
            </div>

            <p className="text-sm text-gray-500 pt-2">
              If you need help, contact me at{" "}
              <a
                className="text-emerald-600 hover:underline"
                href="mailto:r@rayamjad.com"
              >
                r@rayamjad.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
