import AppleWatchApps from "../comps/apple_watch_apps/apple_watch_apps";
import ColorOsDismissNotification from "../comps/coloros_dismiss_notification_interaction/coloros_dismiss_notification_interaction";
import ColorOsEnterPassword from "../comps/coloros_enter_passord/coloros_enter_password";
import CounterAnimation from "../comps/counter_animation/counter_animation";
import GmailInteraction from "../comps/gmail_archive_interaction/gmail_archive_interaction";
import IgReplyMessage from "../comps/ig-reply-message/ig-reply-message";
import InstagramVanishMode from "../comps/instagram_enter_vanish_mode/instagram_vanish_mode";
import TelegramSlider from "../comps/telegrams_slider/telegrams_slider";
import UbuntuAppDirectory from "../comps/ubuntu_app_directory/ubuntu_app_directory";

interface component_props {
  label: string;
  draft: boolean;
  created_on: string;
  component: JSX.Element;
}

export const components: Array<component_props> = [
  {
    label: "Gmail's archive interaction",
    draft: false,
    created_on: "Sat, July 20",
    component: <GmailInteraction />,
  },
  {
    label: "Telegram's speed slider",
    draft: true,
    created_on: "Wed, July 24",
    component: <TelegramSlider />,
  },
  {
    label: "Instagram 'Enter vanish mode' interaction",
    draft: false,
    created_on: "Sat, July 20",
    component: <InstagramVanishMode />,
  },
  {
    label: "Counter animation",
    draft: false,
    created_on: "Sat, July 20",
    component: <CounterAnimation />,
  },

  {
    label: "Instagram reply message interaction",
    draft: false,
    created_on: "Sun, Sep 15",
    component: <IgReplyMessage />,
  },
  {
    label: "ColorOs dismiss notification interaction",
    draft: false,
    created_on: "Sun, Sep 15",
    component: <ColorOsDismissNotification />,
  },
  {
    label: "ColorOs enter wrong password interaction",
    draft: false,
    created_on: "Sun, Sep 15",
    component: <ColorOsEnterPassword />,
  },
  {
    label: "Ubuntu app directory",
    draft: false,
    created_on: "Mon, Sep 16",
    component: <UbuntuAppDirectory />,
  },
];
