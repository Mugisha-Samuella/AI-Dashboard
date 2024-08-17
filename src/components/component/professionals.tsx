import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Soothe</span>
        </Link>
      </header>
      <main className="flex-1 px-4 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-center mb-8">
            Connect with a Mental Health Professional
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Dr. John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Dr. John Doe</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <StarIcon className="w-4 h-4 fill-primary mr-1" />
                      <span>4.8 (120 reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm text-muted-foreground">
                        Online
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Link href="./videocall">
                        <VideoIcon className="w-4 h-4" />
                        <span className="sr-only">Video Call</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Link href="./messages">
                        <MessageCircleIcon className="w-4 h-4" />
                        <span className="sr-only">Message</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Dr. John Doe is a licensed clinical psychologist specializing in cognitive behavioral therapy and stress management. With over 15 years of experience, he provides compassionate care and effective strategies for overcoming anxiety and depression.
                </p>
              </div>
            </div>
            {/* Repeat similar blocks for other professionals */}
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Dr. Jane Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Dr. Jane Smith</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <StarIcon className="w-4 h-4 fill-primary mr-1" />
                      <span>4.6 (92 reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm text-muted-foreground">
                        Online
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Link href="./videocall">
                        <VideoIcon className="w-4 h-4" />
                        <span className="sr-only">Video Call</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Link href="./messages">
                        <MessageCircleIcon className="w-4 h-4" />
                        <span className="sr-only">Message</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Dr. Jane Smith is a licensed therapist with expertise in trauma recovery and family counseling. Her approach is centered on creating a safe and empathetic environment to support clients through their healing journey.
                </p>
              </div>
            </div>
            {/* Continue with other professionals */}
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-between px-6 py-4 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-xs text-muted-foreground hover:underline"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs text-muted-foreground hover:underline"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
