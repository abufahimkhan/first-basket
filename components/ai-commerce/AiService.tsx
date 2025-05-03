import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BrainCircuit, Search, Sparkles } from "lucide-react"

export function AiService() {
    return (
        <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-br from-indigo-800 to-purple-800 p-6 shadow-xl">
            <div className="absolute -top-3 -left-3 animate-pulse">
                <BrainCircuit className="h-8 w-8 text-yellow-300" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white flex items-center">
                <Sparkles className="mr-2 h-6 w-6 animate-spin" />
                AI Product Suggestion
            </h2>
            <p className="mb-6 text-white/80">
                Describe your product, and let our AI craft a stunning product for you !
            </p>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-white mb-1">
                        Product Description
                    </label>
                    <Textarea
                        placeholder="Describe your product in detail..."
                        className="resize-none w-full h-48 rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <Button
                    type="submit"
                    className="flex gap-2 w-fit bg-yellow-400 text-indigo-900 hover:bg-yellow-300 transition transform hover:scale-105"
                >
                   Find With Ai <Search />
                </Button>
            </form>
        </div>
    )
}
