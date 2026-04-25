import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogActions,
} from "@ars/design-system-react";

export default function DialogDemo() {
  return (
    <div className="ars-playground">
      <p className="ars-playground-label">Live React Dialog</p>
      <Dialog>
        <DialogTrigger asChild>
          <button className="btn btn-default">Open dialog</button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Confirm subscription change</DialogTitle>
          <DialogDescription>
            You're moving from the Monthly plan to the Annual plan. The new
            rate will apply at your next billing cycle.
          </DialogDescription>
          <DialogActions>
            <DialogClose asChild>
              <button className="btn btn-ghost">Cancel</button>
            </DialogClose>
            <button className="btn btn-default">Confirm change</button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
