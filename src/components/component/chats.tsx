/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1ja8d76WW9k
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MessageSquareIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Mental Health Community</span>
        </Link>
      </header>
      <main className="flex-1 px-4 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="grid gap-4">
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm text-muted-foreground">Online</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    Hi everyone, I'm struggling with anxiety and depression lately. It's been really tough, but I'm glad
                    to have this supportive community.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    I've been trying to practice mindfulness and self-care, but some days it's just so hard. Does anyone
                    have any tips that have helped them?
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    I'm really grateful for all the kind messages and support I've received here. It means so much to
                    know I'm not alone in this.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    I'm hoping we can all continue to lift each other up and create a safe space to discuss mental
                    health. It's so important.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    Sending positive thoughts to everyone in this community. You're all amazing and I'm glad we can
                    support each other.
                  </p>
                </div>
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm text-muted-foreground">Online</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    I'm really glad I found this community. It's been so helpful to connect with others who understand
                    what I'm going through.
                  </p>
                </div>
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Emily Davis" />
                    <AvatarFallback>ED</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Emily Davis</h3>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm text-muted-foreground">Online</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    I'm really struggling with my mental health right now, but I'm grateful to have this community to
                    lean on. You all are so supportive.
                  </p>
                </div>
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Michael Lee" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Michael Lee</h3>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm text-muted-foreground">Online</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    I'm really grateful for the support I've received in this community. It's been a lifeline for me
                    during a really difficult time.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Input placeholder="Type your message..." className="w-full" />
                <Button className="w-full mt-2">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-between px-6 py-4 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Mental Health Community. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-xs text-muted-foreground hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs text-muted-foreground hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MessageSquareIcon(props) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}