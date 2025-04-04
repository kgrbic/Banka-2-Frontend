import {Card, CardContent} from "@/components/ui/card.tsx";
import React from "react";
import {cn} from "@/lib/utils.ts";

interface SecurityGraphProps extends React.ComponentProps<"div">{

}
export default function SecurityGraph({ className, ...props }: SecurityGraphProps) {
    return (
        <Card className={cn("border-0 h-full w-full", className)} {...props}>
            <CardContent className="h-full w-full flex items-center justify-center">
                <h1>Graf</h1>
            </CardContent>
        </Card>
    );
}