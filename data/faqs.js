// Homepage FAQ. Expanded 2026-10-08 (Rameel: "this is where AI bots can
// really scroll"): 24 questions written the way buyers ask ChatGPT, Gemini,
// and Google, answer-first and in plain English. Rendered with FAQPage schema
// by the <Faq> component, so q/a text must match what renders word-for-word.
//
// EVERY figure below is owner-approved and already published elsewhere on the
// site: price ranges and timelines from data/pricing.js, permit facts from
// /sign-permits and the permits post, the sales process from HSC/CLAUDE.md
// (call > site survey > mockup WITH itemized estimate > permits > build >
// install), landlord wording "help with" (never "handle"), warranty 5 years on
// signs (not awnings), service areas from data/business.js. Don't add a number
// that isn't in one of those sources. No wedding signage, no indoor flat
// letters or plaques, monuments framed as an add-on to storefront work.

export const HOME_FAQS = [
  // ---- Cost
  {
    q: "How much do custom business signs cost in Houston?",
    a: "Channel letter and storefront signs, our most common project, run $2,000 to $20,000 and up installed. Non-lit letter sets start around $2,000. Most illuminated channel letter signs for a single storefront land between $4,000 and $12,000. Monument signs run $6,000 to $50,000 and up because of masonry, foundations, and engineering. Every price we give is a written, itemized estimate for your exact sign, not a guess.",
  },
  {
    q: "How much do channel letters cost?",
    a: "Channel letter signs in Houston run about $2,000 to $20,000 and up installed. Size, letter count, lighting style, and how the letters mount drive the price. A typical lit set for one storefront is $4,000 to $12,000. Large custom logo systems can reach $25,000 or more. Our estimate separates design, permits, fabrication, and installation so you can see what drives the number.",
  },
  {
    q: "Is there a minimum project size?",
    a: "We focus on exterior business signage, the kind of project that usually starts around $2,000 and goes up from there: storefront signs, channel letters, pole and pylon signs, monument signs, awnings, and sign repairs. Small jobs like banners and basic vinyl are not our focus, and we will tell you up front if another shop is a better fit.",
  },
  {
    q: "Do you charge for the design or the estimate?",
    a: "No. The site survey, the design mockup, and the itemized estimate are free. You see your sign rendered on a photo of your actual building before you commit to anything.",
  },

  // ---- Process
  {
    q: "What happens after I contact you?",
    a: "We call you to confirm your project is a good fit. Then we come out to your site for a free survey and take exact measurements. After the survey, we send a free design mockup with your sign's dimensions and an itemized estimate within one business day. Once you approve, we handle the permits, build the sign in our Houston shop, and install it with our own crew.",
  },
  {
    q: "Do you make a mockup of the sign on my building?",
    a: "Yes. After the site survey, we render the sign on a photo of your actual building, sized to what the city and your landlord allow. You see it before we cut anything. Changes at that stage are just pixels, so it is the right time to adjust the look.",
  },
  {
    q: "Do you handle sign permits in Houston?",
    a: "Yes. We prepare the permit package and pull the permits as part of your project. In Houston, a permit is required before a permanent business sign goes up, most sign permits are issued only to licensed sign contractors, and illuminated signs need a separate electrical permit. We confirm the rules for your address before we design, so the sign passes inspection the first time.",
  },
  {
    q: "Can you help with my landlord's sign approval?",
    a: "Yes. Most shopping centers and office buildings have sign criteria, and the landlord has to approve your sign before the city will. We help with landlord approvals by designing to the center's criteria and preparing the drawings and renderings their review needs. It is one of the most common worries we hear on the first call.",
  },
  {
    q: "Who actually builds and installs the sign?",
    a: "Our own team. The sign is designed and fabricated in our Houston shop, and our own licensed crew installs it. We do not hand your job to a wholesale factory in another state or a random subcontractor. When you call, you talk to a real sign maker.",
  },

  // ---- Timelines
  {
    q: "How long does it take to get a sign made and installed?",
    a: "Channel letter and storefront signs typically take 6 to 8 weeks from approved design to installation. Monument signs run 10 to 12 weeks because of the base construction. Permit turnaround is the biggest variable, so we give you a schedule with your estimate. If you have a hard date like a grand opening, tell us up front and we will say honestly whether we can hit it.",
  },
  {
    q: "Can you rush a sign for a grand opening?",
    a: "Sometimes. Fabrication can move quickly, but city permits and electrical inspections have their own timelines that we cannot skip. Tell us the date on the first call. We will tell you what is realistic, and we can often sequence the permit and the build in parallel to save time.",
  },

  // ---- Products
  {
    q: "What kinds of signs do you make?",
    a: "Exterior business signage: illuminated channel letters and storefront signs, pole and pylon signs, monument signs, commercial awnings and canopies, and lit or non-lit acrylic and metal lobby signs. We also repair, reface, and refurbish existing signs, including signs other companies built.",
  },
  {
    q: "What is the difference between channel letters and a cabinet sign?",
    a: "Channel letters are individual letters, each one a lit metal box with an acrylic face, mounted directly to the wall or on a raceway. A cabinet sign is one big lit box with your whole design printed on the face. Channel letters cost more but look more custom and are what most landlords and cities prefer on storefronts. Cabinets are economical for busy, detailed artwork and for pylon panels.",
  },
  {
    q: "Are your illuminated signs UL-certified?",
    a: "Yes. Our illuminated signs are built UL-certified in our Houston shop, using LED modules and power supplies rated for Gulf Coast heat and weather. UL certification is what most cities and landlords require for a lit sign.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. Every sign we build carries a 5-year warranty on materials and workmanship, including the LED lighting on illuminated signs. If something fails, you call the same people who built and installed it.",
  },
  {
    q: "Do you build commercial awnings and canopies?",
    a: "Yes. We build commercial awnings and canopies in our own shop: storefront awnings, entry and walkway canopies, patio covers, and drive-thru structures. We handle the engineering coordination, permits, and installation, and we take on awning and canopy projects anywhere in Texas.",
  },
  {
    q: "Can you repair or reface a sign you didn't build?",
    a: "Yes. A large share of our repair work is on signs other companies installed. We diagnose on site, then quote the actual fix: dark sections, failed power supplies, cracked faces, storm damage, LED retrofits for old fluorescent or neon signs, and new faces or panels for a rebrand. If the sign is beyond sensible repair, we say so and show you a replacement.",
  },
  {
    q: "Do you do monument signs?",
    a: "Yes. We design, engineer, permit, and build monument signs, usually as part of a larger storefront or building sign package. They need foundations, engineering, and a longer permit cycle, so they run $6,000 to $50,000 and up and take 10 to 12 weeks. If you are putting up a new building sign, we will tell you whether a monument makes sense alongside it.",
  },

  // ---- Service area
  {
    q: "What areas do you serve?",
    a: "We are based in Houston and serve the whole metro, including Katy, Sugar Land, The Woodlands, Cypress, Pearland, Spring, and Pasadena. We also have local staff in San Antonio and Austin and serve their surrounding suburbs, such as New Braunfels, Schertz, Boerne, Round Rock, Georgetown, and Pflugerville. Awning and canopy projects we take on across all of Texas.",
  },
  {
    q: "Do you work in San Antonio and Austin?",
    a: "Yes. We have local staff in both cities who handle site surveys and installation, and every sign is built in our Houston shop. Each city and suburb has its own sign code, so we check the rules for your address before we design.",
  },

  // ---- Trust
  {
    q: "How is Houston Sign Crafters rated?",
    a: "We hold a 4.8-star rating across more than 428 reviews. We work with storefront and restaurant owners, property managers, and general contractors across Greater Houston, and you can see completed installs for businesses like Slick City, Pizza Hut, Marshalls, Meerut BBQ, and The Peach Cobbler Factory on this site.",
  },
  {
    q: "Do you work with general contractors and property managers?",
    a: "Yes. For general contractors we quote from the plan set, provide permit-ready drawings, and coordinate engineering and inspections. For property managers we handle tenant panel changes, monument refacing, and multi-tenant sign programs, often on short notice when a new tenant needs to open.",
  },
  {
    q: "Can I see what you have built?",
    a: "Yes. The gallery on this page and our portfolio show real installs, not renderings of someone else's work. Every project shown is a sign we designed, built, and installed ourselves.",
  },
  {
    q: "Who will I talk to when I call?",
    a: "A real sign maker, not a call center. Most days that is Rameel Sheikh, our owner, who answers most calls himself. Tell us what you have in mind and we will tell you straight what will work, what it will run, and how fast we can get it up.",
  },
];

export default HOME_FAQS;
