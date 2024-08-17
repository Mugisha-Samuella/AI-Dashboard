import Link from "next/link";
import { MinusIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { JSX, SVGProps } from "react";
import { CircleCheckIcon, ClipboardListIcon, MenuIcon, MessageCircleIcon, MoveVerticalIcon } from "lucide-react";

export function Evals() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="fixed inset-y-0 left-0 z-10 flex w-14 flex-col border-r bg-background sm:w-64 sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-5 sm:items-start sm:px-6">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base sm:h-10 sm:w-10"
            prefetch={false}
          >
            <BotIcon className="h-4 w-4 transition-all group-hover:scale-110 sm:h-5 sm:w-5" />
            <span className="sr-only">Acme AI</span>
          </Link>
          <nav className="flex flex-col gap-1 sm:gap-2">
            {["All Evaluations", "In Progress", "Completed", "Feedback"].map(
              (label, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3 sm:py-2"
                  prefetch={false}
                >
                  {iconMap[index]}
                  <span className="text-sm font-medium sm:text-base">
                    {label}
                  </span>
                </Link>
              )
            )}
          </nav>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col sm:pl-64">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <BotIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme AI</span>
                </Link>
                {["All Evaluations", "In Progress", "Completed", "Feedback"].map(
                  (label, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      prefetch={false}
                    >
                      {iconMap[index]}
                      {label}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    AI Evaluations
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Evaluations</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search evaluations..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <Card>
            <CardHeader>
              <CardTitle>AI Evaluations</CardTitle>
              <CardDescription>
                Review and manage the performance of your AI models.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Evaluation</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {evaluationData.map((evaluation, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <Link
                          href="#"
                          className="hover:underline"
                          prefetch={false}
                        >
                          {evaluation.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant={evaluation.statusVariant}>
                          {evaluation.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{evaluation.date}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoveVerticalIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Download Report</DropdownMenuItem>
                            <DropdownMenuItem>Provide Feedback</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> evaluations
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}

function BotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

const iconMap = [
  <ClipboardListIcon className="h-4 w-4 sm:h-5 sm:w-5" />,
  <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5" />,
  <CircleCheckIcon className="h-4 w-4 sm:h-5 sm:w-5" />,
  <MessageCircleIcon className="h-4 w-4 sm:h-5 sm:w-5" />,
];

const evaluationData = [
  { name: "Evaluation 1", status: "In Progress", statusVariant: "warning", date: "2024-08-01" },
  { name: "Evaluation 2", status: "Completed", statusVariant: "success", date: "2024-07-28" },
  // More evaluation data...
];
