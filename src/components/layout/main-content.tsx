interface MainContentProps {
    children: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
    return (
        <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
          {children}
        </main>
    )
}