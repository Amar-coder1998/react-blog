import React, { useState } from 'react';
import { Snackbar, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function SnackbarNoInternet() {
    const [open, setOpen ] = useState(!navigator.onLine);

    setTimeout(() => {
        setOpen(false);
    }, 10 * 1000);

    return (<Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              message="You're not online right now. You'll be shown the recently viewed posts."
              action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    onClick={() => setOpen(!open)}
                  >
                    <CloseIcon />
                  </IconButton>
              }
            />)
}