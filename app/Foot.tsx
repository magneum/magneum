type Props = {};

const FOOTER = (props: Props) => {
return (
<div>
<footer
className="bg-[#121112] overflow-x-hidden"
aria-labelledby="footer-heading"
>
<div className="px-4 py-12 max-w-full bg-neutral-900 sm:px-6 lg:px-16 rounded-lg">
<div className="flex flex-wrap items-baseline lg:justify-center">
<span className="mt-2 text-sm font-bold text-gray-500">
Copyright &copy; 2020 - {new Date().getFullYear()}
<a
href="https://bit.ly/magneum"
className="mx-2 text-gray-200 hover:text-lime-800"
rel="noopener noreferrer"
>
@magneum
</a>
under MIT License
</span>
</div>
</div>
</footer>
</div>
);
};

export default FOOTER;
