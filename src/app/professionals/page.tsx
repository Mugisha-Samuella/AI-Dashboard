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
            Talk to a Mental Health Professional
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Existing therapists */}
            <TherapistCard
              name="Amina Niyonsaba"
              rating="4.8 (120 reviews)"
              status="Online"
              description="Amina is a compassionate therapist with extensive experience in helping individuals cope with stress and anxiety."
              image="/placeholder-user.jpg"
            />
            <TherapistCard
              name="Eric Nshimiyimana"
              rating="4.6 (92 reviews)"
              status="Online"
              description="Eric is a skilled counselor specializing in mental health and emotional well-being."
              image="/placeholder-user.jpg"
            />
            <TherapistCard
              name="Yvonne Uwase"
              rating="4.7 (105 reviews)"
              status="Online"
              description="Yvonne offers support and guidance for those navigating mental health challenges."
              image="/placeholder-user.jpg"
            />
            <TherapistCard
              name="Jean Baptiste"
              rating="4.9 (150 reviews)"
              status="Online"
              description="Jean is an experienced psychologist committed to providing empathetic and effective therapy."
              image="/placeholder-user.jpg"
            />
            <TherapistCard
              name="Fatuma Mugenzi"
              rating="4.7 (98 reviews)"
              status="Online"
              description="Fatuma offers compassionate counseling and is dedicated to supporting mental health."
              image="/placeholder-user.jpg"
            />
            {/* New therapists */}
            <TherapistCard
              name="Claude Habimana"
              rating="4.5 (80 reviews)"
              status="Online"
              description="Claude provides expert guidance in managing anxiety and depression."
              image="/placeholder-user.jpg"
            />
            <TherapistCard
              name="Nadine Uwimana"
              rating="4.8 (110 reviews)"
              status="Online"
              description="Nadine specializes in stress management and emotional support."
              image="/placeholder-user.jpg"
            />
            <TherapistCard
              name="Jonathan Niyigena"
              rating="4.6 (100 reviews)"
              status="Online"
              description="Jonathan is known for his innovative approaches to mental health therapy."
              image="/placeholder-user.jpg"
            />
            <TherapistCard
              name="Grace Uwera"
              rating="4.7 (85 reviews)"
              status="Online"
              description="Grace offers a compassionate approach to therapy with a focus on personal growth."
              image="/placeholder-user.jpg"
            />
            <TherapistCard
              name="Sylvain Mugisha"
              rating="4.9 (130 reviews)"
              status="Online"
              description="Sylvain is a dedicated therapist with extensive experience in mental health and wellness."
              image="/placeholder-user.jpg"
            />
          </div>
        </div>
      </main>
      <footer className="px-6 py-4 border-t text-center">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Soothe. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function TherapistCard({ name, rating, status, description, image }) {
  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="w-12 h-12 mr-4 border-2 border-primary">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <StarIcon className="w-4 h-4 fill-primary mr-1" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <span className="text-sm text-muted-foreground">
                {status}
              </span>
            </div>
          </div>
          <div className="ml-auto flex gap-2 relative">
            {/* Tooltip for Video Call */}
            <div className="relative group">
              <Button variant="ghost" size="icon">
                <a href="./videocall">
                  <VideoIcon className="w-4 h-4" />
                  <span className="sr-only">Video Call</span>
                </a>
              </Button>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                Video Call
              </div>
            </div>
            {/* Tooltip for Message */}
            <div className="relative group">
              <Button variant="ghost" size="icon">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Message</span>
              </Button>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                Message
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
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
