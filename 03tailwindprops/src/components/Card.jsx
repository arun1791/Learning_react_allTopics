
export default function Card(props) {
  const { first, second, third } = props;
  
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-xl shadow-xs">
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
        Noteworthy technology acquisitions 2021 
      </h5>
      <h1>{first}</h1>
      <h1>{second.name}</h1>
      <h1>{second.age}</h1>
      <h1>{second.city}</h1>
      <p className="text-body mb-6">
        Here are the biggest technology acquisitions of 2025 so far, in
        reverse chronological order.
      </p>
      <a
        href="https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none"
      >
        Read more
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </a>
    </div>
  )
}
