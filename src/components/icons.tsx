import {
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  User,
} from 'lucide-react'

export const Icons = {
  Logo: (props: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  ),
  Spinner: Loader2,
  Sun: SunMedium,
  Moon,
  Laptop,
  User,
}
