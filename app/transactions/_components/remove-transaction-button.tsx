"use client";

import { removeTransaction } from "@/app/_actions/remove-transaction";
import { Button } from "@/app/_components/ui/button";
import { TrashIcon } from "lucide-react";

interface RemoveTransactionButtonProps {
  transactionId: string;
}
const RemoveTransactionButton = ({
  transactionId,
}: RemoveTransactionButtonProps) => {
  const removeTransactionById = async (transactionId: string) => {
    console.log(transactionId);
    try {
      await removeTransaction(transactionId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => removeTransactionById(transactionId)}
      >
        <TrashIcon />
      </Button>
    </>
  );
};

export default RemoveTransactionButton;
