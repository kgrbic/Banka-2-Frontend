import { cn } from "@/lib/utils.ts";
import { Card } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import {BankAccount} from "@/types/bank-account.ts";
import React from "react";
import {formatCurrency} from "@/lib/format-currency.ts";
import Wallet from "@/assets/Wallet.tsx";


interface BalanceCardProps extends React.ComponentProps<"div">{
    cardPageVersion?: boolean,
    account: BankAccount,
    income?: number,
    expensses?: number,
    onSendClick?: () => void,
    onDetailsClick?: () => void,
}


const BankAccountBalanceCard = ({ cardPageVersion=false, account, income=0, expensses=0, onSendClick, onDetailsClick, className, ...props }: BalanceCardProps) => {
    return (
        <Card
            className={cn(
                "border-0 h-full p-6 flex flex-col lg:flex-row lg:items-center justify-center ",
                className
            )}
            {...props}
        >
            <div>
                <div className="justify-center w-full">
                    <div>
                        <h6 className="font-medium text-4xl font-heading mb-1">
                            {
                                formatCurrency(account.balance, account.currency.code)
                            }

                        </h6>
                        <p className="text-sm text-secondary-foreground font-paragraph">Account balance</p>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-7 py-9 font-paragraph">
                        <div className="flex items-center">
                            <Button variant="negative" className="cursor-auto" size="icon">
                                <span className="icon-[ph--arrow-up-fill] w-4 h-4 text-success" />
                            </Button>
                            <div className="ml-3">
                                <p className="font-semibold">{formatCurrency(income, account.currency.code)}</p>
                                <p className="text-sm text-secondary-foreground">Income</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Button variant="negative" className="cursor-auto" size="icon">
                                <span className="icon-[ph--arrow-down-fill] w-4 h-4 text-destructive" />
                            </Button>
                            <div className="ml-3">
                                <p className="font-semibold">{formatCurrency(expensses, account.currency.code)}</p>
                                <p className="text-sm text-secondary-foreground">Expenses</p>
                            </div>
                        </div>
                    </div>

                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <Button variant="primary" size="lg" onClick={onSendClick}>Send</Button>
                            <Button variant="negative" size="lg" onClick={onDetailsClick}>
                                {cardPageVersion ? "Account info": "Details"}
                            </Button>
                        </div>

                </div>
            </div>

            <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
                <Wallet className="size-full"/>
            </div>
        </Card>
    );
};

export default BankAccountBalanceCard;