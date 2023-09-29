export function SearchBar() {
    return (
        <input
            className={"flex h-14 w-full rounded-xl dark:bg-[#202b3b] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"}
            placeholder="Search for cities"
        />
    )
}
