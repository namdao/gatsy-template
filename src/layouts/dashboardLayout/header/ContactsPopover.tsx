import React, { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Typography,
  ListItemText,
  ListItemAvatar,
  MenuItem,
} from "@mui/material";
// utils
import { fToNow } from "utils/formatTime";
// components
import { CustomAvatar } from "components/customAvatar";
import Iconify from "components/iconify";
import Scrollbar from "components/scrollbar";
import MenuPopover from "components/menuPopover";
import BadgeStatus from "components/badgeStatus";
import IconButtonAnimate from "components/animate/IconButtonAnimate";
import { random } from "lodash";
import { sub } from "date-fns";

const _contacts = [...Array(20)].map((_, index) => ({
  id: index,
  name: "nam dao",
  username: "nam.dao",
  avatar: `https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_${
    index + 1
  }.jpg`,
  address: "address hcm city",
  phone: "0987654321",
  email: "namdao@gmail.com",
  lastActivity: sub(new Date(), { days: index, hours: index }),
  status: ["online", "offline", "away", "busy"].find((v, i) =>
    parseInt(random(0, 3).toString())
  ),
}));
const ITEM_HEIGHT = 64;

export default function ContactsPopover() {
  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  return (
    <>
      <IconButtonAnimate
        color={openPopover ? "primary" : "default"}
        onClick={handleOpenPopover}
        sx={{
          width: 40,
          height: 40,
          ...(openPopover && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Iconify icon="eva:people-fill" />
      </IconButtonAnimate>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        sx={{ width: 320 }}
      >
        <Typography variant="h6" sx={{ p: 1.5 }}>
          Contacts{" "}
          <Typography component="span">({_contacts.length})</Typography>
        </Typography>

        <Scrollbar sx={{ height: ITEM_HEIGHT * 6 }}>
          {_contacts.map((contact) => (
            <MenuItem key={contact.id} sx={{ height: ITEM_HEIGHT }}>
              <ListItemAvatar>
                <CustomAvatar
                  src={contact.avatar}
                  BadgeProps={{
                    badgeContent: <BadgeStatus status={contact.status} />,
                  }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={contact.name}
                secondary={
                  contact.status === "offline"
                    ? fToNow(contact.lastActivity)
                    : ""
                }
                primaryTypographyProps={{
                  typography: "subtitle2",
                  sx: { mb: 0.25 },
                }}
                secondaryTypographyProps={{ typography: "caption" }}
              />
            </MenuItem>
          ))}
        </Scrollbar>
      </MenuPopover>
    </>
  );
}
