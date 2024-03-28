import React from 'react';
import { Grid, Skeleton } from "@mui/material";

const Loader = () => {
  return (
    <>
            <Grid item xs={3}>
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={180}
                style={{ marginBottom: 6 }}
              />
              <Skeleton width="60%" style={{ marginBottom: 6 }} />
              <Skeleton />
            </Grid>
            <Grid item xs={3}>
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={180}
                style={{ marginBottom: 6 }}
              />
              <Skeleton width="60%" style={{ marginBottom: 6 }} />
              <Skeleton />
            </Grid>
            <Grid item xs={3}>
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={180}
                style={{ marginBottom: 6 }}
              />
              <Skeleton width="60%" style={{ marginBottom: 6 }} />
              <Skeleton />
            </Grid>
            <Grid item xs={3}>
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={180}
                style={{ marginBottom: 6 }}
              />
              <Skeleton width="60%" style={{ marginBottom: 6 }} />
              <Skeleton />
            </Grid>
          </>
  );
}

export default Loader;
