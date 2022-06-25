import React, { FC, PropsWithChildren } from "react"
import { IUser } from "../../../types/models/user.types"
import Author from "../../Channel/Author"
import Spinner from "../../Loaders/Spinner"
import MainLayout from "../MainLayout"
import ChannelTabs from "./ChannelTabs"

interface IChannelLayoutProps {
  user: IUser | null
  isLoading: boolean
}

const ChannelLayout: FC<PropsWithChildren<IChannelLayoutProps>> = ({ children, user, isLoading }) => {
  return (
    <MainLayout>
      {isLoading || !user ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <div className="md:px-10 px-2">
          <Author user={user} />
          <ChannelTabs />
          {children}
        </div>
      )}
    </MainLayout>
  )
}

export default ChannelLayout
