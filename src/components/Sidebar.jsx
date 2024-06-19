import {
  HouseHeart,
  FileText,
  SignpostSplitFill,
  Markdown,
  CardList,
  Command,
  Motherboard,
} from "react-bootstrap-icons";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const iconSize = 26;
const sideBarOptions = [
  {
    text: "Home",
    icon: <HouseHeart size={iconSize} />,
    id: "home",
    route: "",
  },
  {
    text: "View Details",
    icon: <FileText size={iconSize} />,
    id: "view_details",
    route: "view-details",
  },
  {
    text: "Compare Files",
    icon: <SignpostSplitFill size={iconSize} />,
    id: "compare_files",
    route: "compare",
  },
  {
    text: "Markdown Template",
    icon: <Markdown size={iconSize} />,
    id: "markdown_template",
    route: "markdown",
  },
  {
    text: "Decoder",
    icon: <Motherboard size={iconSize} />,
    id: "decoder",
    route: "decoder",
  },
  {
    text: "Live Course Details",
    icon: <CardList size={iconSize} />,
    id: "live_details",
    route: "live-details",
  },

  { text: "Others", icon: <Command />, id: "others", route: "others" },
];

const findCurrentPath = (path = "") => {
  const sanitizedPathName = path.replace("/", "");
  const routeSearchResult = sideBarOptions.find(
    (r) => r.route === sanitizedPathName
  );
  if (!routeSearchResult) {
    return sideBarOptions[0];
  }
  return routeSearchResult;
};

function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentSelectedMenu = findCurrentPath(pathname);

  const handleMenuClick = (ev) => {
    const { menu_id } = ev.currentTarget.dataset;
    navigate(`/${sideBarOptions.find((v) => v.id == menu_id)?.route}`);
  };

  return (
    <div
      className={`w-full h-full overflow-y-auto bg-primary`}
      tabIndex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <div className="w-full h-16 flex items-center justify-center border border-gray-300">
        <h3 className="text-3xl font-bold">Tr</h3>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        {sideBarOptions.map((v) => {
          return (
            <button
              data-selected={currentSelectedMenu.route === v.route}
              title={v.text}
              data-menu_id={v.id}
              key={Math.random()}
              onClick={handleMenuClick}
              className={`w-full mx-auto flex gap-2 p-2 font-medium items-center text-gray-300
                             hover:text-white data-[selected=true]:text-text-primary
                             data-[selected=true]:bg-accent data-[selected=true]:rounded-md `}
            >
              <div>{v.icon}</div>
              <div>{v.text}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
