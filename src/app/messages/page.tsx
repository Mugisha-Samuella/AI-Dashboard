/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9aQWzgH4spS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[350px_1fr]">
      <div className="flex flex-col border-r bg-muted/40" style={{ width: '350px' }}>
        <header className="flex h-[60px] items-center justify-between px-6 border-b">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <MessageSquareIcon className="h-6 w-6" />
            <span className="">Chat with Dr. Amani Ntwari</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Dr. Amani Ntwari" />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="flex-1 overflow-auto">
          <nav className="grid gap-2 px-4 py-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:bg-muted/50"
              prefetch={false}
            >
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Dr. Amani Ntwari" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Dr. Amani Ntwari</p>
                <p className="text-xs text-muted-foreground truncate">Hello, Marie. I'm here for our chat.</p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted/50"
              prefetch={false}
            >
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Marie Uwase" />
                <AvatarFallback>MU</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Marie Uwase</p>
                <p className="text-xs text-muted-foreground truncate">
                  Hi Dr. Amani, I'm doing okay, but I've been feeling a bit anxious lately.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted/50"
              prefetch={false}
            >
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Eric Ndayisaba" />
                <AvatarFallback>EN</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Eric Ndayisaba</p>
                <p className="text-xs text-muted-foreground truncate">
                  Hi Dr. Amani, I'm having some issues with my work-life balance.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted/50"
              prefetch={false}
            >
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Aline Mugenzi" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Aline Mugenzi</p>
                <p className="text-xs text-muted-foreground truncate">
                  Hello Dr. Amani, I wanted to discuss some stress management techniques.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted/50"
              prefetch={false}
            >
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Diane Nyiramahoro" />
                <AvatarFallback>DN</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Diane Nyiramahoro</p>
                <p className="text-xs text-muted-foreground truncate">
                  Hi Dr. Amani, I've been feeling overwhelmed with recent changes.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted/50"
              prefetch={false}
            >
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Jules Habimana" />
                <AvatarFallback>JH</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Jules Habimana</p>
                <p className="text-xs text-muted-foreground truncate">
                  Dr. Amani, I need some advice on handling anxiety before exams.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted/50"
              prefetch={false}
            >
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Imane Nshimiyimana" />
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Imane Nshimiyimana</p>
                <p className="text-xs text-muted-foreground truncate">
                  Hello Dr. Amani, I've been dealing with some relationship issues.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted/50"
              prefetch={false}
            >
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Oliver Kabera" />
                <AvatarFallback>OK</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Oliver Kabera</p>
                <p className="text-xs text-muted-foreground truncate">
                  Hi Dr. Amani, I'm looking for strategies to improve my focus at work.
                </p>
              </div>
            </Link>
            {/* Repeat similar structure for other links */}
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex-1 px-4 py-12 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Dr. Amani Ntwari" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-4 max-w-[80%]">
                    <p className="text-muted-foreground text-sm">
                      Hello, Marie. I'm here for our chat. How are you feeling today?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <div className="bg-primary rounded-lg p-4 max-w-[80%] text-primary-foreground">
                    <p className="text-sm">
                      Hi Dr. Amani, I'm doing okay, but I've been feeling a bit anxious lately. I was hoping we could
                      talk about some strategies to manage my anxiety.
                    </p>
                  </div>
                  <Avatar className="w-12 h-12 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Marie Uwase" />
                    <AvatarFallback>MU</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Dr. Amani Ntwari" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-4 max-w-[80%]">
                    <p className="text-muted-foreground text-sm">
                      I'm sorry to hear you've been feeling anxious, Marie. Let's talk through some techniques that
                      can help you manage your anxiety. First, let's discuss deep breathing exercises...
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <div className="bg-primary rounded-lg p-4 max-w-[80%] text-primary-foreground">
                    <p className="text-sm">
                      Okay, the deep breathing exercises sound really helpful. I'll be sure to practice those. Is there
                      anything else you recommend?
                    </p>
                  </div>
                  <Avatar className="w-12 h-12 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Marie Uwase" />
                    <AvatarFallback>MU</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="border-t p-4">
                <form className="flex items-center gap-2">
                  <Input placeholder="Type your message..." className="flex-1 bg-muted rounded-lg px-4 py-2 text-sm" />
                  <Button size="icon">
                    <SendIcon className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex items-center justify-between px-6 py-4 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 Mental Health Consultation. All rights reserved.</p>
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

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

