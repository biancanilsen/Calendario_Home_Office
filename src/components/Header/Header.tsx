import { AppBar, AppBarIcon, AppBarLink, Header, Icon, SearchContainer, SearchIcon, SearchInput } from "./Header.css";

export default function HeaderComponent() {
  return (
    <Header>
      <AppBar>
        <AppBarLink>
          <a href="#calendario">Calendário</a>
          <a href="#ferias">Férias</a>
        </AppBarLink>
        <AppBarIcon>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search..." />
            <SearchIcon className="fas fa-search" />
          </SearchContainer>
          <Icon className="fas fa-cog" />
          <Icon className="fas fa-bell" />
          <Icon className="fas fa-user-circle" />
        </AppBarIcon>
      </AppBar>
    </Header>
  );
}
