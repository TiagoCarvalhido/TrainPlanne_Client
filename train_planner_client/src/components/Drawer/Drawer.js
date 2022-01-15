<Drawer
  anchor={anchor}
  open={state[anchor]}
  onClose={toggleDrawer(anchor, false)}
>
  {list(anchor)}
</Drawer>;
