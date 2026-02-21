import { ChatHeader } from '@/shared/ui';
import { ChatList } from '@/widgets/chat';

export const ChatSidebar = () => (
  <div className="flex h-full flex-col">
    <ChatHeader />
    <ChatList />
  </div>
);
