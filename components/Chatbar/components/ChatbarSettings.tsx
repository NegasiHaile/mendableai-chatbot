import { IconSettings } from '@tabler/icons-react';
import { useContext, useState } from 'react';

import HomeContext from '@/pages/api/home/home.context';

import { SettingDialog } from '@/components/Settings/SettingDialog';

import { SidebarButton } from '../../Sidebar/SidebarButton';
import ChatbarContext from '../Chatbar.context';
import { ClearConversations } from './ClearConversations';

export const ChatbarSettings = () => {
  const [isSettingDialogOpen, setIsSettingDialog] = useState<boolean>(false);

  const {
    state: { conversations },
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const { handleClearConversations, handleImportConversations } =
    useContext(ChatbarContext);

  return (
    <div className="flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm pb-20">
      {conversations.length > 0 ? (
        <ClearConversations onClearConversations={handleClearConversations} />
      ) : null}

      <SidebarButton
        text={'Settings'}
        icon={<IconSettings size={18} />}
        onClick={() => setIsSettingDialog(true)}
      />

      <SettingDialog
        open={isSettingDialogOpen}
        onClose={() => {
          setIsSettingDialog(false);
        }}
      />
    </div>
  );
};
