import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200"
      class="w-14 h-14"
      aria-hidden="true"
      focusable="false"
    >
      {/* Texto "SC" */}
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="central" 
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-weight="bold"
        font-size="140"
        fill="#0066cc"
      >
        SC
      </text>
    </svg>
  );
}); 