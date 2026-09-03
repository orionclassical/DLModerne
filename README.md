## ABOUT DLMODERNE
A Bayong Tasche Collection Website that shows users different bayong bags that are crafted from natural materials in the Philippines, which are sabutan, pandan and banig.

**TECH STACK**

The following are the technologies that I have used

### Core Framework & Runtime

* **Next.js 14+ (App Router):** Full-stack framework handling page routing, server-side rendering (SSR), static site generation (SSG), and server-side backend logic (Server Actions / API Routes).
* **Node.js:** Server runtime environment executing JavaScript/TypeScript code on the backend and running your local development tools.
* **TypeScript:** Type-safe programming language used across both frontend and backend to eliminate bugs and provide auto-completion.

### Styling, UI & Assets

* **Tailwind CSS:** Utility-first CSS framework for rapid responsive styling, dark/light mode themes, and layout building.
* **Google Fonts (`Handlee` & `Nanum Pen Script`):** Native Next.js font optimization (`next/font/google`) for headers and supporting text.
* **Lucide React (`lucide-react`):** Modern, lightweight icon library for navigation, buttons, and layout controls.
* **Next Themes (`next-themes`):** Lightweight theme provider for toggling between Dark Mode and Light Mode with Tailwind CSS.

### Database, Auth & Storage (BaaS)

* **Supabase:** Backend-as-a-Service providing:
* **PostgreSQL:** Relational database storing recipes, ingredients, instructions, and user data.
* **Supabase Auth:** Built-in authentication service for user Log In / Sign Up.
* **Row Level Security (RLS):** Database-level security enforcing privacy per user.
* **Supabase Storage:** Blob storage for user-uploaded recipe images.


* **`@supabase/ssr` & `@supabase/supabase-js`:** Official Supabase client libraries for Next.js App Router server and client components.

### Development & Workspace Environment

* **Visual Studio Code (VS Code):** Primary code editor.
* **npm:** Node Package Manager for managing dependencies.

**FEATURES**

***Common Features***
1. Search and Filter (Sort Date, Alphabet, etc.)
2. Dark Mode & Light Mode (Optional)
3. Product size, material, and how many left

***Special Features***
1. User can email directly to Tita Lapel
2. Whats App directly to Tita Lapel
3. Language change (German & English) 

Systems that could possibly help Tita Lapel for customer support/service
- Chatting Function
- Checkout Function

**PAGES**

Pages expected to be in DLModerne
1. Home Page (Introduce the product, have redirect links (About Page, Material Used Pages, and Products Page))
2. About Page (Introduce the website in detail, What materials are used and give detail, Dive deep on how it is processed I guess in another page)
3. Products Page
4. Admin Page (Items they want to put, remove, change for easy product changes)

**OTHERS**

***Color Pallet***

Text

- #222222 //paragraph
- #1E3A27 //For Important Text such as title 

Button

- #132E1D //Background Color
- #FFFFFF //Button Text Color

Main Colors

- #FFFDFB
- #FFF4E9


***Font Styles***
Playfair Display SC - Titles
EB Garamond - Subtext
Montserrat - Buttons
