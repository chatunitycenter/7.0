export default {
  // General system
  smsAvisoMG: () => "⚠️ Warning!",
  smsWait: () => "⏳ Loading...",
  smsError: () => "❌ An error occurred",
  smsSuccess: () => "✅ Operation completed successfully",
  smsProcessing: () => "🔄 Processing...",
   
  // General commands
  smsOnlyGroup: () => "❌ This command only works in groups!",
  smsOnlyAdmin: () => "❌ Only admins can use this command!",
  smsOnlyOwner: () => "❌ Only the owner can use this command!",
  smsOnlyPremium: () => "💎 This command is only available for premium users!",
  smsInvalidCommand: () => "❌ Invalid command",
  smsNoText: () => "❌ Please enter some text",
  smsNoMedia: () => "❌ Send or reply to a media file",
  
  // AI and ChatGPT
  aiNoQuery: () => "⚠️ *Enter a valid request for ChatGPT!*\n\n📌 Examples:\n{prefix}{command} Tell me a joke\n{prefix}{command} Suggest 5 fantasy books\n{prefix}{command} HTML code for a login page",
  aiError: () => "❌ An error occurred while generating the response. Please try again later.",
  aiProcessing: () => "🤖 Processing your request...",
  
  // Welcome/goodbye system
  welcomeTitle: () => "✧ WELCOME! ✧",
  goodbyeTitle: () => "✧ GOODBYE! ✧",
  welcomeDefault: (user, group, members) => `*Welcome* @${user} 🎉\n┊ *Group:* ${group}\n╰► *Members:* ${members}`,
  goodbyeDefault: (user, members) => `*Goodbye* @${user} 👋\n┊ Left the group\n╰► *Members remaining:* ${members}`,
  
  welcomeSetHelp: () => `🎉 *Set welcome message*

*Usage:* {command} <message>

*Available variables:*
• @user - User tag
• $nome - User name  
• $gruppo - Group name
• $membri - Member count
• $numero - Phone number
• $tag - User tag (alias of @user)

*Example:*
{command} Hello @user! 👋 Welcome to $gruppo! We are now $membri members! 🎉

*To reset to default message:*
{command} reset`,
  
  goodbyeSetHelp: () => `👋 *Set goodbye message*

*Usage:* {command} <message>

*Available variables:*
• @user - User tag
• $nome - User name  
• $gruppo - Group name
• $membri - Member count
• $numero - Phone number
• $tag - User tag (alias of @user)

*Example:*
{command} Goodbye @user! 😢 We'll miss you in $gruppo. We remain $membri members.

*To reset to default message:*
{command} reset`,
  
  welcomeReset: () => "✅ Welcome message reset to default!",
  goodbyeReset: () => "✅ Goodbye message reset to default!",
  welcomeSet: () => "✅ Custom welcome message set!",
  goodbyeSet: () => "✅ Custom goodbye message set!",
  
  // Language system
  languageChanged: (params) => `🌍 Language changed to: ${params?.lang === 'it' ? 'Italiano 🇮🇹' : 'English 🇺🇸'}`,
  languageHelp: () => `🌍 *Language Management*\n\n*Available languages:*\n• 🇮🇹 Italiano (it)\n• 🇺🇸 English (en)\n\n*Usage:*\n{prefix}language it - Set Italian\n{prefix}language en - Set English\n{prefix}language - Show current language`,
  currentLanguage: (lang) => `🌍 Current language: ${lang === 'it' ? 'Italiano 🇮🇹' : 'English 🇺🇸'}`,
  invalidLanguage: () => "❌ Invalid language. Use 'it' for Italian or 'en' for English.",
  
  // Admin system
  adminOnly: () => "👑 Only administrators can use this command!",
  ownerOnly: () => "🔒 Only the bot owner can use this command!",
  
  // Anti-spam system
  antiSpamWarning: () => "⚠️ Don't spam! Slow down with messages.",
  antiSpamMuted: () => "🔇 You have been muted for spamming.",
  
  // File and media system
  fileNotFound: () => "📁 File not found",
  fileTooLarge: () => "📁 File too large",
  invalidFormat: () => "📁 Invalid file format",
  
  // Group system
  groupInfoUpdated: () => "ℹ️ Group information updated",
  userPromoted: (user) => `👑 @${user} has been promoted to administrator`,
  userDemoted: (user) => `👤 @${user} has been removed from administrators`,
  userKicked: (user) => `🚫 @${user} has been removed from the group`,
  
  // Economy system (if present)
  noCoins: () => "💰 You don't have enough coins!",
  coinsEarned: (amount) => `💰 You earned ${amount} coins!`,
  
  // Help system
  helpMenu: () => `📋 *ChatUnity Bot Help Menu*\n\n🤖 *AI Commands:*\n• {prefix}ai <text> - ChatGPT\n• {prefix}img <text> - Generate images\n\n👥 *Group Commands:*\n• {prefix}welcome - Manage welcome messages\n• {prefix}antilink - Toggle antilink\n\n🌍 *Language:*\n• {prefix}language <it/en> - Change language\n\n📞 *Support:*\n• {prefix}support - Contact support`,
  
  // Menu system
  mainMenuTitle: () => '𝑴𝑨𝑰𝑵 𝑴𝑬𝑵𝑼',
  adminMenuTitle: () => '𝑨𝑫𝑴𝑰𝑵 𝑴𝑬𝑵𝑼',
  adminCommands: () => '𝑨𝑫𝑴𝑰𝑵 𝑪𝑶𝑴𝑴𝑨𝑵𝑫𝑺',
  chooseMenu: () => 'Choose a menu:',
  mainMenuButton: () => '🏠 Main Menu',
  ownerMenuButton: () => '👑 Owner Menu',
  securityMenuButton: () => '🚨 Security Menu',
  groupMenuButton: () => '👥 Group Menu',
  aiMenuButton: () => '🤖 AI Menu',
  promoteCommand: () => 'promote /makeadmin',
  demoteCommand: () => 'demote /removeadmin',
  warnCommands: () => 'warn / unwarn',
  muteCommands: () => 'mute / unmute',
  setDescCommand: () => 'setdescription',
  setScheduleCommand: () => 'setschedule',
  setNameCommand: () => 'setname',
  hidetagCommand: () => 'hidetag',
  kickCommand: () => 'kick / remove',
  adminsCommand: () => 'admins',
  tagallCommand: () => 'tagall',
  openCloseCommand: () => 'open / close',
  setWelcomeCommand: () => 'setwelcome',
  setByeCommand: () => 'setbye',
  inactiveCommand: () => 'inactive',
  listNumCommand: () => 'listnum + prefix',
  cleanupCommand: () => 'cleanup + prefix',
  clearPlayCommand: () => 'clearplay',
  rulesCommand: () => 'rules/setrules',
  quarantineCommand: () => 'quarantine',
  dsCommand: () => 'ds',
  listWarnCommand: () => 'listwarn',
  linkCommand: () => 'link',
  linkQrCommand: () => 'linkqr',
  poweredBy: () => 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ',
  
  // Group menu
  groupMenuTitle: () => '𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔',
  memberCommands: () => '𝐌𝐄𝐌𝐁𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒',
  musicAudioSection: () => 'MUSIC & AUDIO',
  infoUtilitySection: () => 'INFORMATION & UTILITIES',
  imageEditSection: () => 'IMAGES & EDITING',
  pokemonSection: () => 'POKEMON',
  gangSystemSection: () => 'GANG SYSTEM',
  gamesCasinoSection: () => 'GAMES & CASINO',
  economyRankingSection: () => 'ECONOMY & RANKINGS',
  socialInteractionSection: () => 'SOCIAL INTERACTIONS',
  howMuchSection: () => 'HOW MUCH?',
  personalityTestSection: () => 'PERSONALITY TESTS',
  songCommand: () => 'song',
  audioCommand: () => 'audio',
  videoCommand: () => 'video',
  artistTitleCommand: () => 'artist-title',
  cityCommand: () => 'city',
  textCommand: () => 'text',
  groupCommand: () => 'group',
  repoCommand: () => 'repo',
  userCommand: () => 'user',
  topicCommand: () => 'topic',
  checkSiteCommand: () => 'check site',
  photoToStickerCommand: () => 'photo to sticker',
  stickerToPhotoCommand: () => 'sticker to photo',
  improveQualityCommand: () => 'improve photo quality',
  photoCommand: () => 'photo',
  hiddenPhotoCommand: () => 'hidden photo',
  memeCommand: () => 'meme',
  fromStickerCommand: () => 'from sticker',
  blurImageCommand: () => 'blur image',
  comingSoonCommand: () => 'coming soon',
  quantityCommand: () => 'quantity',
  headsOrTailsCommand: () => 'heads or tails',
  mathProblemCommand: () => 'math problem',
  rockPaperScissorsCommand: () => 'rock paper scissors',
  pokemonInfoCommand: () => 'Pokémon info',
  balanceCommand: () => 'balance',
  topUsersCommand: () => 'top users',
  buyUCCommand: () => 'buy UC',
  withdrawUCCommand: () => 'UC from bank',
  earnXPCommand: () => 'earn XP',
  proposalCommand: () => 'proposal',
  endRelationshipCommand: () => 'end relationship',
  affinityCommand: () => 'affinity',
  charmCommand: () => 'charm',
  createFightCommand: () => 'create fights',
  truthOrDareCommand: () => 'truth or dare',
  versionLabel: () => 'VERSION',
  collabLabel: () => 'COLLAB: ONE PIECE',
  supportLabel: () => 'SUPPORT',
  
  // Owner menu
  ownerMenuTitle: () => '𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔',
  ownerReservedCommands: () => '𝐑𝐄𝐒𝐄𝐑𝐕𝐄𝐃 𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒',
  setNameCommand: () => 'setname',
  resetNameCommand: () => 'resetname',
  manageCommand: () => 'manage',
  setGroupsCommand: () => 'setgroups',
  addGroupsCommand: () => 'addgroups',
  resetGroupsCommand: () => 'resetgroups',
  setPpCommand: () => 'setpp',
  banUserCommand: () => 'banuser',
  unbanUserCommand: () => 'unbanuser',
  blockUserCommand: () => 'blockuser',
  unblockUserCommand: () => 'unblockuser',
  getFileCommand: () => 'getfile',
  saveCommand: () => 'save',
  dpCommand: () => 'dp',
  getPluginCommand: () => 'getplugin',
  joinCommand: () => 'join',
  outCommand: () => 'out',
  prefixCommand: () => 'prefix',
  resetPrefixCommand: () => 'resetprefix',
  godModeCommand: () => 'godmode',
  resetCommand: () => 'reset',
  addCommand: () => 'add',
  removeCommand: () => 'remove',
  everyGroupCommand: () => 'everygroup',
  banChatCommand: () => 'banchat',
  unbanChatCommand: () => 'unbanchat',
  restartCommand: () => 'restart',
  shutdownBotCommand: () => 'shutdownbot',
  updateBotCommand: () => 'updatebot',
  imageParam: () => 'image',
  pluginParam: () => 'plugin',
  linkParam: () => 'link',
  autoAdminParam: () => 'autoadmin',
  numMessagesParam: () => 'num. messages',
  commandParam: () => 'command',
  groupParam: () => 'group',
  
  // Menu AI
  aiMenuTitle: () => 'AI BOT MENU',
  generalCommands: () => 'GENERAL COMMANDS',
  iaCommand: () => 'ai',
  alyaCommand: () => 'Alya',
  geminiCommand: () => 'gemini',
  chatgptCommand: () => 'chatgpt',
  deepseekCommand: () => 'deepseek',
  voiceCommand: () => 'voice',
  imageCommand: () => 'image',
  image2Command: () => 'image2',
  image3Command: () => 'image3',
  animalInfoCommand: () => 'animalinfo',
  kcalCommand: () => 'kcal',
  summaryCommand: () => 'summary',
  recipeCommand: () => 'recipe',
  
  // Menu Security
  securityMenuTitle: () => 'SECURITY FUNCTIONS MENU',
  activateDisable: () => 'ACTIVATE/DISABLE',
  howToUse: () => 'HOW TO USE',
  activateFunction: () => 'activate [function]',
  disableFunction: () => 'disable [function]',
  
  // AI DeepSeek
  deepseekNoText: () => '*Enter text to talk with DeepSeek AI.*',
  deepseekNoResponse: () => '❌ No valid response obtained from DeepSeek AI.',
  deepseekError: () => '*❌ Error processing the request.*',
  
  // AI Gemini
  geminiNoText: () => 'What do you want?',
  geminiNoResponse: () => 'I did not receive a valid response from the API. Try again later.',
  geminiError: () => 'An error occurred. Please try again later.',
  geminiConsoleError: () => 'Error in command',
  
  // AI Summary
  summaryUsage: () => '❗ Use the command like this:\n<command> <long text>\nOr reply to a long message with the command',
  summaryTooLong: () => '❌ Text is too long. Maximum limit: 2500 characters.',
  summaryEmptyResponse: () => 'Empty response from API.',
  summaryTitle: () => 'Summary',
  summaryConsoleError: () => '[❌ summary plugin error]',
  summaryError: () => '⚠️ Error generating summary. Try again later.',
  
  // AI Shazam
  shazamFileTooLarge: () => '╯⊱⚠️⊱ *WARNING | ATTENZIONE* ⊱⚠️⊱╮\n\nThe file you uploaded is too large, we recommend cutting the file into a smaller fragment. 10-20 seconds of audio is sufficient for identification',
  shazamSearchResult: () => 'SEARCH RESULT',
  shazamTitle: () => 'TITLE',
  shazamArtist: () => 'ARTIST',
  shazamAlbum: () => 'ALBUM',
  shazamGenre: () => 'GENRE',
  shazamReleaseDate: () => 'RELEASE DATE',
  shazamNotFound: () => 'Not found',
  shazamWrongUsage: () => '╯⊱❗️⊱ *WRONG USAGE* ⊱❗️⊱╮\n\nREPLY TO AN AUDIO OR VIDEO',
  
  // AI Support
  supportGreeting: () => 'Hello! I am the ChatUnity-bot AI assistant, how can I help you today?',
  supportNoResponse: () => 'I did not receive a valid response from the API. Try again later.',
  supportError: () => 'An error occurred. Please try again later.',
  supportConsoleError: () => 'Error in command',
  
  // AI Voice
  voiceFFmpegError: () => 'ffmpeg not found or error in audio processing. Make sure ffmpeg is installed and accessible in PATH.',
  voiceDefaultResponse: () => 'What do you want',
  voiceNoUnderstand: () => 'I did not understand, can you repeat?',
  voiceInvalidFile: () => 'Error: invalid audio file.',
  voiceError: () => 'Unknown error. Try again later.',
  voiceConsoleError: () => 'Error in command',
  
  // Admin Delete Session
  adminDeleteSessionDirectUse: () => '*🚨 Use this command directly in the bot number.*',
  adminDeleteSessionEmpty: () => '*❌ The sessions folder is empty or does not exist.*',
  adminDeleteSessionAlreadyEmpty: () => '❗ Sessions are empty, try again later I need them ‼️',
  adminDeleteSessionSuccess: () => '🔥 ${count} session files have been deleted! Thank you for clearing me out😼',
  adminDeleteSessionError: () => '❌ Deletion error!',
  
  // Admin Link QR
  adminLinkQRSuccess: () => 'Here is the QR Code for the group link!',
  adminLinkQRError: () => 'Error generating QR Code:',
  
  menuFooter: () => 'Choose a menu:',
  menuAdmin: () => '🛡️ Admin Menu',
  menuOwner: () => '👑 Owner Menu',
  menuSecurity: () => '🚨 Security Menu',
  menuGroup: () => '👥 Group Menu',
  menuAI: () => '🤖 AI Menu',
  
  // Menu commands
  staffCommand: () => 'staff',
  hegemoniaCommand: () => 'hegemony',
  candidatesCommand: () => 'candidates',
  installCommand: () => 'install',
  guideCommand: () => 'guide',
  channelsCommand: () => 'channels',
  systemCommand: () => 'system',
  faqCommand: () => 'FAQ',
  pingCommand: () => 'ping',
  reportCommand: () => 'report',
  suggestCommand: () => 'suggest',
  newsCommand: () => 'news',
  
  // Menu labels
  versionLabel: () => 'VERSION',
  collabLabel: () => 'COLLAB: ONE PIECE',
  usersLabel: () => 'USERS',
  
  // Event system
  eventName: () => 'ChatUnity Event',
  eventDescription: () => 'Join our event!',
  eventLocationName: () => 'Event venue',
  
  // AI Image generation
  aiImgHelp: () => 'Please write a description to generate the image.',
  wordleWin: 'Congratulations! You guessed the word in {attempts} attempts! 🎉',
  wordleLose: 'You ran out of attempts! The word was: {word} 😢',
  aiImgProcessing: () => '> CREATING IMAGE ...🔥',
  aiImgError: () => '❌ Error generating image.',
  aiImgSuccess: () => '✅ Image generated successfully!',
  
  // System messages
  botStarted: () => "🤖 ChatUnity Bot started successfully!",
  botStopped: () => "🤖 ChatUnity Bot stopped",
  connectionLost: () => "📡 Connection lost, reconnecting...",
  connectionRestored: () => "📡 Connection restored!",
  
  // Common errors
  networkError: () => "🌐 Network error, please try again later",
  serverError: () => "🔧 Server error, please try again later",
  unknownError: () => "❓ Unknown error",
  
  // Confirmation messages
  confirmAction: () => "❓ Are you sure you want to continue? Reply with 'yes' or 'no'",
  actionCancelled: () => "❌ Action cancelled",
  actionConfirmed: () => "✅ Action confirmed",
  
  // Download system
  downloadStarted: () => "⬇️ Download started...",
  downloadCompleted: () => "✅ Download completed!",
  downloadFailed: () => "❌ Download failed",
  
  // Sticker system
  stickerCreated: () => "🎨 Sticker created successfully!",
  stickerFailed: () => "❌ Unable to create sticker",
  
  // Music system
  musicNotFound: () => "🎵 Music not found",
  musicDownloading: () => "🎵 Downloading music...",
  musicReady: () => "🎵 Music ready!",
  
  // Pin message system
  pinReplyToMessage: () => "⚠️ Reply to a message to pin it.",
  pin1Day: () => "⏳ 1 Day",
  pin7Days: () => "⏳ 7 Days",
  pin30Days: () => "⏳ 30 Days",
  pinChooseDuration: () => "Choose how long you want to pin the message:",
  pinNoMessageQueued: () => "❌ No message to pin. First use the pin command by replying to a message.",
  pinError: () => "❌ Error pinning the message.",
  unpinReplyToMessage: (params) => `⚠️ Reply to a message to ${params?.action || 'perform the action'}.`,
  unpinAction: () => "remove it from pinned",
  executeAction: () => "perform the action",
  commandError: () => "❌ Error executing the command.",
  
  // Profile picture system
  profilePicBotError: () => "🚫 Cannot get bot's profile picture.",
  profilePicCaption: () => "📸",
  profilePicNotFound: (params) => `@${params?.user || 'user'} doesn't have a profile picture 🚫`,
  
  // Italian numbers auto-accept system 
  adminOnlyCommand: () => "*Only admins can use this command*",
  botAdminRequired: () => "*Bot must be admin to use this function*",
  italianNumbersDisabled: () => "*❌ Italian numbers auto-accept disabled*",
  italianNumbersEnabled: () => "*✅ Italian numbers auto-accept enabled*\n\nItalian numbers (39) will be automatically accepted, others rejected",
  
  // Reject requests system
  groupOnlyCommand: () => "This command is only used in groups.",
  botAdminRequiredReject: () => "I must be admin to reject requests.",
  noRequestsToReject: () => "There are no requests to reject.",
  noRequestsWithPrefix: (params) => `No requests with prefix +${params?.prefix || ''}.`,
  noRequestsRejected: () => "No requests rejected.",
  requestsRejectedSuccess: (params) => `❌ Rejected ${params?.count || 0} requests successfully${params?.prefix ? ` with prefix +${params.prefix}` : ""}.`,
  rejectRequestsError: () => "Error while rejecting requests.",
  
  // Sport selection system
  sportFootball: () => "⚽ Football",
  sportBasket: () => "🏀 Basketball",
  sportTennis: () => "🎾 Tennis",
  sportFormula1: () => "🏎️ Formula 1",
  sportMMA: () => "🥊 MMA",
  sportCycling: () => "🚴‍♂️ Cycling",
  chooseSportMessage: () => "📌 *Choose the sport you want to follow to receive personalized news:*",
  chooseSportFooter: () => "💡 You can change it anytime",
  
  // Hide tag system
  tagBy: () => "Tag by",
  tagError: () => "Tag error:",
  
  // File owner system
  fileNameRequired: () => "⚠️ You must specify the file name to create. Ex: `.file name.txt`",
  fileAlreadyExists: (params) => `⚠️ The file "${params?.fileName || 'file'}" already exists.`,
  fileCreationError: (params) => `❌ Error creating file: ${params?.error || 'unknown error'}`,
  fileCreatedSuccess: (params) => `✅ The file "${params?.fileName || 'file'}" has been created successfully in the bot folder.`,
  
  // AI Alya system
  alyaWhatDoYouWant: () => "What do you want?",
  alyaNoValidResponse: () => "I didn't receive a valid response from the API. Try again later.",
  alyaError: (params) => `An error occurred. Please try again later.\n\n#report ${params?.command || 'command'}\n\n${wm}`,
  
  // Group list system
  groupListTitle: (params) => `GROUP LIST OF ${params?.botName || 'Bot'}`,
  totalGroups: () => "Total Groups",
  nameNotAvailable: () => "Name not available",
  notAdmin: () => "Not admin",
  error: () => "Error",
  
  // Group join system
  invalidLink: () => "Invalid link!",
  joiningGroup: () => "😎 Wait 3 seconds, I'm joining the group",
  groupJoinGreeting: (params) => `Hello friends of ${params?.groupName || 'group'}\n\nMy commands can be viewed in ${params?.prefix || '.'}menu`,
  botAlreadyInGroup: () => "Bot is already in the group",
  
  // Script on/off system
  scriptNameRequired: () => "Write the script name, example: .offscript info",
  fileNotFound: () => "File not found.",
  scriptAlreadyOff: () => "Script is already off.",
  scriptTurnedOff: (params) => `Script ${params?.file || 'file'} turned off.`,
  scriptTurnedOn: (params) => `Script ${params?.file || 'file'} reactivated.`,
  
  // Server/command system
  serverCommandRequired: () => "⚠️ You must specify the command to execute. Ex: `.server ls -la`",
  executingCommand: (params) => `🔄 Executing command: "${params?.cmd || 'command'}"`,
  executionError: (params) => `❌ Error during execution: ${params?.error || 'unknown error'}`,
  output: () => "Output",
  errorsWarnings: () => "Errors/Warnings",
  commandExecutedNoOutput: () => "✅ Command executed without output",
  outputTruncated: () => "... (output truncated)",
  
  // Zip/backup system
  zipUsage: (params) => `⚠️ Use: ${params?.command || 'command'} <archive_name>`,
  creatingBackup: () => "🔄 Creating backup in progress...",
  backupCreatedSending: (params) => `✅ Backup ${params?.archiveName || 'archive'}.zip created. Sending...`,
  compressionError: (params) => `❌ Error during compression: ${params?.error || 'unknown error'}`,
  
  // Antispam system
  spamDetectedModifying: () => "Spam detected! Modifying group settings...",
  onlyAdminsCanSend: () => "Only administrators can send messages.",
  userNotFoundOrRemoved: () => "User not found or already removed.",
  userIsAdminNotRemoved: () => "User is an administrator and will not be removed.",
  allSpamMessagesDeleted: () => "All spam messages have been deleted.",
  chatReactivatedForAll: () => "Chat reactivated for all members.",
  antispamDetected: () => "*antispam by Origin detected*",
  antispamNotificationSent: () => "Antispam notification message sent.",
  spamCounterReset: () => "Spam counter for user reset.",
  spamHandlingError: () => "Error during spam handling:",
  botNotAdminOrRestrictionDisabled: () => "Bot is not admin or restriction is disabled. Cannot perform operation.",
  spamCounterResetTimeout: () => "Spam counter for user reset after timeout.",
  timeoutExpiredReset: () => "Timeout expired. Reset spam counter for user.",

    // Sistema musica
  musicNotFound: () => "🎵 Music not found",
  musicDownloading: () => "🎵 Downloading music...",
  musicReady: () => "🎵 Music ready!",

  // Egemonia Project
  egemoniaMainText: () => `╭━〔*🌐 EGEMONY PROJECT*〕━┈⊷
 The *Egemony* is a project created by ChatUnity's founder to unite the top private bot developers:

┃◈ • 333bot
┃◈ • BixbyBot
┃◈ • OriginBot
┃◈ • UniversalBot
┃◈ • TurboBot
┃◈ • OnixBot
┃◈ • VareBot

 All together to bring ChatUnityBot to global competition, helping with plugin creation/fixing.
 From version 5.0, plugins created by these developers are already included!
╰━━━━━━━━━━━━━━⊷

*Discover more about each bot by clicking the buttons below!*`,

  egemoniaFooter: () => 'Powered by ChatUnity Egemony',

  button_333bot: () => "🤖 333bot",
  button_bixby: () => "🤖 BixbyBot",
  button_origin: () => "🤖 OriginBot",
  button_universal: () => "🤖 UniversalBot",
  button_turbo: () => "🤖 TurboBot",
  button_onix: () => "🤖 OnixBot",
  button_varebot: () => "🤖 VareBot",

  returnToEgemonia: () => 'Go back with .egemonia',
  backButton: () => "🔙 Back to Egemony",

  botInfo_333bot: () => "🤖 *333bot*\nHistoric Italian bot created by Gab 333, famous for its modularity, group management and over 100 active plugins.",
  botInfo_bixbybot: () => "🤖 *BixbyBot*\nInnovative and versatile, specialized in automations and smart responses.",
  botInfo_originbot: () => "🤖 *OriginBot*\nBot rich in security features and automations, its speed is unbeatable.",
  botInfo_universalbot: () => "🤖 *UniversalBot*\nMulti-purpose bot, supports many platforms and integrations.",
  botInfo_turbobot: () => "🤖 *TurboBot*\nOptimized for performance and large group management.",
  botInfo_onixbot: () => "🤖 *OnixBot*\nEvery response, a touch of class. Elegance stands out",
  botInfo_varebot: () => "🤖 *VareBot*\nVareBot is a versatile bot rich in APIs, designed to offer useful features and fun commands in one simple and fast experience!",

  // Candidature
  candidatiText: () => `🚀 𝐃𝐎 𝐘𝐎𝐔 𝐖𝐀𝐍𝐓 𝐓𝐎 𝐉𝐎𝐈𝐍 𝐓𝐇𝐄 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘 𝐒𝐓𝐀𝐅𝐅, gain experience and be recognized as a staffer? 🚀

This is your moment! 𝐅𝐈𝐋𝐋 𝐎𝐔𝐓 𝐓𝐇𝐄 𝐅𝐎𝐑𝐌 𝐁𝐄𝐋𝐎𝐖 (𝐢𝐭 𝐰𝐢𝐥𝐥 𝐫𝐞𝐦𝐚𝐢𝐧 𝐚𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬) to apply and show your skills.

🔥 𝐖𝐇𝐀𝐓 𝐀𝐖𝐀𝐈𝐓𝐒 𝐘𝐎𝐔:

•	𝐑𝐞𝐜𝐨𝐠𝐧𝐢𝐭𝐢𝐨𝐧 𝐢𝐧 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐚𝐬 𝐚 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐨𝐫
•	𝐆𝐚𝐢𝐧 𝐝𝐢𝐫𝐞𝐜𝐭 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 in the world of bots and community management
•	𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐚𝐜𝐜𝐞𝐬𝐬 to Beta Bots
•	𝐃𝐢𝐫𝐞𝐜𝐭 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧 with the ChatUnity team

Don't miss this opportunity, 𝐀𝐏𝐏𝐋𝐘 𝐍𝐎𝐖 and prove you have what it takes!

> 📋 𝐀𝐏𝐏𝐋𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐎𝐑𝐌:
https://docs.google.com/forms/d/e/1FAIpQLSd4no8yx-QuRf7xFyIcLYHLSNkF2cRaHvsO_prmlIwdKqBC4Q/viewform?usp=dialog`,

  // Download section
  scaricaOrderText: () => '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘-𝐁𝐎𝐓 💬',
  
  scaricaText: () => `『💬』 ══ •⊰✰⊱• ══ 『💬』

𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘-𝐁𝐎𝐓

Follow these steps to install ChatUnity Bot correctly on Termux

repository termux https://github.com/chatunitycenter/chatunity-bot

video yt tutorial https://youtube.com/shorts/qek7wWadhtI?si=MrrA3bLWWAsLmpw6

『💬』 ══ •⊰✰⊱• ══ 『💬』

1. Download and install Termux

Download the correct version of Termux from the following link:

🔗 Download Termux 0.119.1

https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com.apk/file

After downloading the APK file, install it on your device and grant the required permissions.

『💬』 ══ •⊰✰⊱• ══ 『💬』

2. Configure Termux

Open Termux and run the following command:

termux-setup-storage

When prompted, grant the necessary permissions.

『💬』 ══ •⊰✰⊱• ══ 『💬』

3. Install ChatUnity Bot

Now run the following command to update Termux:

apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/chatunitycenter/chatunity-bot/main/chatunity.sh | bash

『💬』 ══ •⊰✰⊱• ══ 『💬』

4. Start ChatUnity Bot

After installation, you can start the bot using the command that will be shown at the end of the process.

If you encounter problems, make sure you followed all steps correctly and check for any error messages in Termux.

『💬』 ══ •⊰✰⊱• ══ 『💬』`,

  scaricaTitle: () => '𝙱𝙾𝚃 𝙸𝙽𝙵𝙾',
  scaricaBody: () => 'ChatUnity',
  scaricaSource: () => 'https://github.com/chatunitycenter/chatunity-bot',

  // Guide section
  guidaText: () => `𝐆𝐔𝐈𝐃𝐄 𝐓𝐎 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘-𝐁𝐎𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒

\`𝐆𝐎𝐎𝐆𝐋𝐄 𝐃𝐎𝐂𝐒 𝐋𝐈𝐍𝐊:\`
https://docs.google.com/document/d/e/2PACX-1vSgfwbRZrQM2W-3tctvqX7_0eAF-FvU3K_SK8txRfGkNzJjziAIVV8G2EIMg4Ju03TlGIzMKaicjWTH/pub`,

  newsletterName: () => 'ChatUnity Bot',

  // Channels section
  canaliText: () => `╭━〔 *🌐 OFFICIAL CHANNELS* 〕━┈⊷
┃─────────────·๏
┃✨ *ChatUnity* 
┃🔗 https://whatsapp.com/channel/0029VaZVlJZHwXb8naJBQN0J
┃
┃🤖 *ChatUnity-Bot*
┃🔗 https://whatsapp.com/channel/0029Vb32UwhA89MZtd6WRS3G
┃
┃🌍 *ChatUnity Server*
┃🔗 https://whatsapp.com/channel/0029VbA4h0pKmCPS5ozJsm3j
┃╰─────────────·๏
╰━━━━━━━━━━━━━━━━━━━⊷

*Join our channels to stay updated, get support and discover all the news!*

💎 _Powered by ChatUnity_`,

 // UI snippets
  canaliFooter: () => 'Choose a channel and join!',
  diskSpaceError: () => '✧ Error retrieving disk space:',

  // System status
  systemStatusText: (params) => `✅️ *SYSTEM STATUS*

🚩 *Host ⪼* ${params?.nomeHost || 'N/A'}
🏆 *Platform ⪼* ${params?.piattaforma || 'N/A'}
💫 *Architecture ⪼* ${params?.architettura || 'N/A'}
🥷 *Total RAM ⪼* ${params?.memoriaTotale || 'N/A'}
🚀 *Free RAM ⪼* ${params?.memoriaLibera || 'N/A'}
⌛️ *Used RAM ⪼* ${params?.memoriaUsata || 'N/A'}
🕒 *Uptime ⪼* ${params?.tempoAttivo || 'N/A'}

🪴 *Node.js Memory Usage:* 
→ RSS: ${params?.rss || 'N/A'}
→ Heap Total: ${params?.heapTotal || 'N/A'}
→ Heap Used: ${params?.heapUsed || 'N/A'}
→ External: ${params?.external || 'N/A'}
→ Array Buffers: ${params?.arrayBuffers || 'N/A'}

☁️ *Disk Space:*
→ Total Size: ${params?.dimensioneDisco || 'N/A'}
→ Used: ${params?.usatoDisco || 'N/A'}
→ Available: ${params?.disponibileDisco || 'N/A'}
→ Usage Percentage: ${params?.percentualeDisco || 'N/A'}`,

  notAvailable: () => 'Not available',

  // Names and labels
  newsletterName: (params) => `${params?.botName || params?.nomeDelBot || 'ChatUnity'}`,
  defaultBotName: () => 'ChatUnity',
  unknownModel: () => 'Unknown model',

  // Ping / status cards
  pingText: (params) => `╭━〔🚀 SYSTEM STATUS 🚀〕━┈⊷
┃◈╭─────────────·๏
┃◈┃• ⌛ *Uptime*: ${params?.uptime || 'N/A'}
┃◈┃• ⚡ *Ping*: ${params?.speed || 'N/A'} ms
┃◈┃
┃◈┃• 💻 *CPU*: ${params?.cpuModel || 'N/A'}
┃◈┃• 🔋 *Usage*: ${params?.cpuSpeed || 'N/A'} MHz 
┃◈┃
┃◈┃• 💾 *RAM*: ${params?.usedMem || 'N/A'} / ${params?.totalMem || 'N/A'}
┃◈┃• 🟢 *Free*: ${params?.freeMem || 'N/A'}
╰━━━━━━━━━━━━━┈·๏`,

  pingTitle: (params) => `${params?.nomeDelBot || params?.botName || 'ChatUnity'}`,
  pingBody: (params) => `Version: ${params?.versioneBot || params?.botVersion || 'N/A'}`,

  // Errors
  thumbnailError: () => 'Error retrieving thumbnail:',
  sendMessageError: () => 'Error sending message:',
  profilePictureError: () => 'Error retrieving profile picture:',
  fetchError: () => 'Failed to fetch thumbnail',
  thumbnailFetchError: () => 'Error fetching thumbnail:',

  // Reports
  reportNoText: () => '⚠ *Please include the command or issue you want to report.*',
  reportTooShort: () => '⚠️ *Please describe the issue in more detail (minimum 10 characters).*',
  reportTooLong: () => '⚠️ *Maximum allowed length: 1000 characters.*',

  reportFormat: (params) => `*❌️ \`R E P O R T\` ❌️*

📱 Number:
• Wa.me/${params?.sender || 'N/A'}

👤 User:
• ${params?.pushName || 'Anonymous'}

📝 Message:
• ${params?.text || 'N/A'}`,

  // Terms of use & privacy
  terminiText: (params) => `╭━━〔 *📜 TERMS OF USE & PRIVACY* 〕━━╮
┃
┃ *All information here does not exclude the bot owner and accredited Owners for the use of ${params?.botName || 'ChatUnity'}.*
┃ _We are not responsible for any lack of knowledge you may have regarding this information._
┃
┣━━━〔 🔒 *PRIVACY TERMS* 〕━━━┫
┃ • We are aware of the constant use you may make of the Bot and we guarantee that information such as (images, videos, links, location, audio, stickers, gifs, contacts) you provide to the official numbers will not be shared with anyone, nor used outside the Bot environment.
┃ • What you do with the Bot is your responsibility; in official numbers, chats are deleted every 24 hours according to WhatsApp’s disappearing messages.
┃ • The Bot may not be active 24/7 on official numbers; this does not imply it cannot be, nor that unofficial owners will do so.
┃ • The anonymous chat of the *#start* command, as the name suggests, will not reveal any user data on behalf of ${params?.botName || 'ChatUnity'}. This does not prevent people using this feature from sharing their data on official numbers.
┃ • Data that ${params?.botName || 'ChatUnity'} obtains from users’ official accounts, groups, and their settings may be reset, modified, and/or rectified to ensure the Bot remains in optimal condition. (Users can request remediation via Instagram or with the *#Reporte* command with evidence.)
┃ • We are NOT responsible if this Bot is altered by unofficial numbers or if a GitHub repository not corresponding to the official one is used, or if third‑party integrations compromise users via unofficial versions.
┃ • The *Sub Bot* feature ensures the security of your data as applied to official accounts.
┃
┣━━━〔 ⚠️ *TERMS OF USE* 〕━━━┫
┃ • Using this Bot implies that you understand the Terms and Conditions so there are no issues when using Bot features.
┃ • The Bot may contain material suitable only for people over 18. We are NOT responsible if you do not meet the minimum age for adult material.
┃ • Images, videos, and audio in this Bot are for public use, but altering existing material that bears the Bot’s name or relevant info is considered disrespectful.
┃ • When requesting entry into a group with an official account, it is recommended that the group not contain hate topics, viruses, inappropriate content, discrimination, or baseless campaigns.
┃ • If you receive an official communication from an official number, be respectful. Likewise, if you receive a message without having used a command, be respectful—it may be a real person.
┃ • The official accounts of ${params?.botName || 'ChatUnity'} are not responsible for how you use the "Sub Bot" function.
┃
┣━━━〔 📌 *OFFICIAL REPOSITORY* 〕━━━┫
┃ https://github.com/chatunitycenter/chatunity-bot
┃
┣━━━〔 💰 *DONATIONS* 〕━━━┫
┃ *DONATE TO THE CREATOR VIA THIS OFFICIAL ACCOUNT*
┃ ~ _If you appreciate and value this work, you can help with a donation to continue the project._
┃ *https://paypal.me/chatunity*
┃
┃ *~ Thanks for taking the time to learn about chatunity-bot*`,

  anonymous: () => 'Anonymous',
  quotedMessage: () => '📎 Quoted:\n',
  notAvailable: () => 'Not available',
  unknownAuthor: () => 'Unknown',
  invalidNumber: () => 'Invalid number!',
  errorOccurred: (params) => `Error: ${params?.error || 'Unknown error'}`,
  genericError: (params) => `╭━━〔 ❗ 〕━━┈⊷\n┃◈ *Error:* ${params?.error || 'Unknown error'}\n╰━━━━━━━━━━┈·๏`,

  // Branding
  newsletterName: (params) => `${params?.nomeDelBot || params?.botName || 'ChatUnity'}`,
  defaultBotName: () => 'ChatUnity',

  // Bug reports
  reportAdTitle: () => '⚠️ BUG REPORT ⚠️',
  reportAdBody: () => 'New report received',
  reportSuccess: () => '✅ *Your report has been sent to the developer.*\n_⚠ False reports may lead to restrictions._',
  reportError: () => 'Error while reporting:',
  reportNoText: () => '⚠ *Please enter the command you want to report.*',
  reportTooShort: () => '⚠️ *Please describe the issue in more detail (minimum 10 characters).*',
  reportTooLong: () => '⚠️ *Maximum allowed length: 1000 characters.*',
  reportFormat: (params) => `*❌️ \`R E P O R T\` ❌️*

📱 Number:
• Wa.me/${params?.sender || 'N/A'}

👤 User:
• ${params?.pushName || 'Anonymous'}

📝 Message:
• ${params?.text || 'N/A'}`,

  // Proposals
  proposalAdTitle: () => '⚠️ COMMAND PROPOSAL ⚠️',
  proposalAdBody: () => 'New proposal received',
  proposalSuccess: () => '✅ *Your proposal has been sent to the developer.*\n_⚠ Illegal commands may lead to restrictions._',
  proposalError: () => 'Error while submitting proposal:',
  proposalNoText: () => '⚠️ *Please enter the command you want to propose. e.g.: .suggest (command) (explanation)*',
  proposalTooShort: () => '⚠️ *Please describe the command in more detail (minimum 10 characters).*',
  proposalTooLong: () => '⚠️ *Maximum allowed length: 1000 characters.*',
  proposalFormat: (params) => `* \`P R O P O S A L\` *

📱 Number:
• Wa.me/${params?.sender || 'N/A'}

👤 User:
• ${params?.pushName || 'Anonymous'}

📝 Message:
• ${params?.text || 'N/A'}`,

  // News
  newsText: () => `*RELEASE V6.1*\n\n`
    + `📅 *Date:* 18/08 \n`
    + `🆕 *Main updates:*\n`
    + `• New social command\n`
    + `• Optimized console logs\n`
    + `• Optimized update command\n`
    + `• New dox interface\n`
    + `• New staff: giusemd & anubi\n`
    + `• *Security management transferred to DEATH:*\n`
    + `  - New security features\n`
    + `  - Full project restructuring\n`
    + `• Preparing for V7.0 with new features\n\n`,

  // Warnings
  warnNoMention: () => '❌ You must mention a user or reply to their message.',
  warnBot: () => "🚫 You can't warn the bot.",
  warnUserNotFound: () => '❌ User not found in the database.',
  warnMessage: (params) => `⚠️ WARNING ${params?.current || 0}/3 (3 warns = ban)`,
  warnBanMessage: () => '⛔ USER REMOVED AFTER 3 WARNINGS',
  delwarnMessage: (params) => `✅ Warning removed\nRemaining warnings: ${params?.remaining || 0}`,

  // Downloader and media
  formatNotSupported: () => '╭━━〔 ❗ 〕━━┈⊷\n┃◈ *Unsupported format*\n╰━━━━━━━━━━┈·๏',
  detailsError: () => '╭━━〔 ❗ 〕━━┈⊷\n┃◈ *Error retrieving details*\n╰━━━━━━━━━━┈·๏',
  downloadErrorLog: () => 'Download error:',
  downloadError: () => '╭━━〔 ❗ 〕━━┈⊷\n┃◈ *Download error*\n╰━━━━━━━━━━┈·๏',
  progressErrorLog: () => 'Progress error:',
  progressError: () => '╭━━〔 ❗ 〕━━┈⊷\n┃◈ *Progress check error*\n╰━━━━━━━━━━┈·๏',
  noInputText: () => '╭━━〔 ❗ 〕━━┈⊷\n┃◈ *Please enter a title or link*\n╰━━━━━━━━━━┈·๏',
  noResults: () => '╭━━〔 ❗ 〕━━┈⊷\n┃◈ *No results found*\n╰━━━━━━━━━━┈·๏',
  audioComing: () => '🎵 Audio incoming, please wait a moment...',
  videoComing: () => '🎬 Video incoming, please wait a moment...',
  downloadComplete: () => '✅ *Download complete!*',
  noValidLink: () => '╭━━〔 ❗ 〕━━┈⊷\n┃◈ *No valid link found*\n╰━━━━━━━━━━┈·๏',
  videoTooLong: (params) => `╭━━〔 ❗ 〕━━┈⊷\n┃◈ *Video too long!*\n┃◈ Maximum allowed duration is 5 minutes\n┃◈ Current duration: ${params?.timestamp || 'N/A'}\n╰━━━━━━━━━━┈·๏`,
  videoInfo: (params) => `╭〔*🎥 VIDEO INFO*〕┈⊷
┃◈╭─────────·๏
┃◈┃• ✍️ Title: ${params?.title || 'N/A'}
┃◈┃• ⏳ Duration: ${params?.timestamp || 'N/A'}
┃◈┃• 👀 Views: ${params?.views || 'N/A'}
┃◈┃• 🔰 Channel: ${params?.author || 'Unknown'}
┃◈┃• 🔳 Published: ${params?.ago || 'N/A'}
┃◈┃• 🔗 Link: ${params?.url || 'N/A'}
┃◈└───────┈⊷
╰━━━━━━━━━┈·๏`,

  // Buttons and interactions
  chooseFormat: () => 'Choose a format:',
  buttonAudio: () => '🎵 download audio',
  buttonVideo: () => '🎬 download video',
  buttonSave: () => '💾 save to playlist',

  // Music / playlist
  specifySong: () => 'Please specify a song to search for',
  songExists: (params) => `Song already in playlist! Use ${params?.prefix || ''}playlist to view saved tracks.`,
  emptyPlaylist: (params) => params?.userName ? `${params.userName} has no saved songs` : 'Your playlist is empty!',
  songFormat: (params) => `🎵 *${params?.title || 'Unknown'}*\n⏳ ${params?.timestamp || 'N/A'} | 📺 ${params?.author || 'Unknown'}`,
  searching: (params) => `Searching for "${params?.query || ''}"...`,
  songSaved: () => '*Song saved!*',
  songDeleted: () => '*Song deleted!*',
  yourPlaylist: () => 'Your playlist',
  userPlaylist: (params) => `${params?.userName || 'User'}'s playlist`,
  moreSongs: (params) => `...and ${params?.count || 0} more songs`,
  selectSong: () => 'Select a song to play',
  selectDelete: () => '*Select a song to delete*',
  deleteUsage: (params) => `Use: ${params?.prefix || ''}delete <number>`,

  // Buttons (generic)
  saveNew: () => 'Save new',
  viewPlaylist: () => 'View Playlist',
  play: () => 'Play',
  delete: () => 'Delete',
  back: () => 'Back',
  restore: () => 'Restore',
  user: () => 'User',


    // Lyrics
  lyricsNoInput: () => '✧ Enter the song name in the format:\n*artist - title* or *artist title*',
  lyricsInvalidFormat: () => '✧ Invalid format. Use:\n*artist - title* or *artist title*',
  lyricsMissingInfo: () => '✧ Specify both artist and title in the format:\n*artist - title* or *artist title*',
  lyricsNotFound: () => 'Lyrics not found',
  lyricsError: () => '✧ Lyrics not found. Try:\n- A different format (artist - title)\n- Check spelling\n- Try another site if this one fails',

  // Weather
  weatherNoCity: () => '❗ Enter a city name. Usage: .weather [city name]',
  weatherCityNotFound: () => '🚫 City not found. Check spelling and try again.',
  weatherError: () => '⚠ An error occurred while fetching weather info. Please try again later.',
  weatherInfo: (params) => `
> 🌍 Weather info for ${params?.city || 'N/A'}, ${params?.country || 'N/A'} 🌍
> 🌡 Temperature: ${params?.temp ?? 'N/A'}°C
> 🌡 Feels like: ${params?.feelsLike ?? 'N/A'}°C
> 🌡 Min: ${params?.tempMin ?? 'N/A'}°C
> 🌡 Max: ${params?.tempMax ?? 'N/A'}°C
> 💧 Humidity: ${params?.humidity ?? 'N/A'}%
> ☁ Weather: ${params?.weatherMain || 'N/A'}
> 🌫 Description: ${params?.weatherDesc || 'N/A'}
> 💨 Wind: ${params?.windSpeed ?? 'N/A'} m/s
> 🔽 Pressure: ${params?.pressure ?? 'N/A'} hPa

> © Powered By ChatUnity
  `.trim(),

  // Translate
  translateUsage: () => `*🌍 How to use .translate 🌍*\n📌 Format: *.translate <text> <language>*\n📖 Example: *.translate hello japanese*\n\n🌐 *Supported languages:* 🌐\n\n`,
  languageEntry: (params) => `🔹 ${params?.name || 'N/A'} = \`${params?.code || 'N/A'}\`\n`,
  translateSyntax: () => `⚠️ Correct usage: *.translate <text> <language>*\n📖 Example: *.translate hello chinese*`,
  languageNotFound: () => `❌ Language not recognized. Use *.translate* to see the list of available languages.`,
  noTranslation: () => `No translation found.`,
  translationResult: (params) => `🌍 *Translation:* 🌍\n📌 *Original text:* ${params?.text || 'N/A'}\n📖 *Target language:* ${params?.langInput || 'N/A'} (${params?.targetLang || 'N/A'})\n\n🔹 *Result:* ${params?.translatedText || 'N/A'}`,
  translationErrorLog: () => `Translation error:`,
  translationError: () => `❌ Translation error. Check the parameters and try again.`,

  // Timezone
  timezoneTitle: () => 'Zone:',
  currentZone: () => 'Current zone',

  // Counter
  countNoText: () => '> ⓘ Provide text to count.',
  countSpecialChars: () => '> ⚠️ The provided text contains special characters.',
  countResult: (params) => {
    if (params?.hasNumbers) {
      return ` ⓘ The provided text contains ${params?.wordCount ?? 0} words and ${params?.numberCount ?? 0} numbers.`;
    } else {
      return ` ⓘ The provided text contains ${params?.wordCount ?? 0} words.`;
    }
  },

  // Help messages
  infoSetAgeHelp: () => 'To set your age use .setage <age>\nTo remove your age use .delage',
  infoSetIgHelp: () => 'Specify an Instagram username with .setig <user> or use .delig to remove it.',
  infoGroupOnly: () => '❌ This command can only be used in groups.',

  // Grades and roles
  grade1: () => 'Beginner I 😐',      grade2: () => 'Beginner II 😐',
  grade3: () => 'Recruit I 🙂',       grade4: () => 'Recruit II 🙂',
  grade5: () => 'Advanced I 🫡',      grade6: () => 'Advanced II 🫡',
  grade7: () => 'Bomber I 😎',        grade8: () => 'Bomber II 😎',
  grade9: () => 'Pro I 😤',           grade10: () => 'Pro II 😤',
  grade11: () => 'Elite I 🤩',        grade12: () => 'Elite II 🤩',
  grade13: () => 'Master I 💪🏼',      grade14: () => 'Master II 💪🏼',
  grade15: () => 'Mythic I 🔥',       grade16: () => 'Mythic II 🔥',
  grade17: () => 'Hero I 🎖',         grade18: () => 'Hero II 🎖',
  grade19: () => 'Champion I 🏆',     grade20: () => 'Champion II 🏆',
  grade21: () => 'Dominator I 🥶',    grade22: () => 'Dominator II 🥶',
  grade23: () => 'Stellar I 💫',      grade24: () => 'Stellar II 💫',
  grade25: () => 'Cosmic I 🔮',       grade26: () => 'Cosmic II 🔮',
  grade27: () => 'Titan I 😈',        grade28: () => 'Titan II 😈',
  gradeMax: () => 'Eclipsian ❤️‍🔥',

  roleFounder: () => 'Founder ⚜️',
  roleAdmin: () => 'Admin 👑',
  roleMember: () => 'Member 🤍',

  // Gender
  genderMale: () => '🚹',
  genderFemale: () => '🚺',
  genderNotSet: () => 'Not set',

  // Profile info card
  infoText: (params) => `꧁════ ☾︎•✮•☽︎ ════꧂
 📝 Messages: ${params?.messages ?? 0}
 ⚠️ Warn: ${params?.warn ?? 0} / 4
 🟣 Role: ${params?.role || 'Unknown'}
 🗓️ Age: ${params?.age || 'Not set'}
 🚻 Gender: ${params?.gender || 'Not set'}
 🤬 Blasphemies: ${params?.blasphemy ?? 0}
 🌐 Instagram: ${params?.instagram || 'not set'}
> thanks dad Riad
꧁════ ☾︎•✮•☽︎ ════꧂`,

  // Misc labels
  years: () => 'years',
  notSet: () => 'Not set',
  instagramNotSet: () => 'not set',
  unknown: () => 'Unknown',
  creationBy: () => 'created by Onix🌟',
  buttonSetAge: () => '🗓️ Set Age',
  buttonSetMale: () => '🚹 Set Male',
  buttonSetFemale: () => '🚺 Set Female',
  buttonSetIg: () => '🌐 Set IG',
  footerSetData: () => 'Set your personal data:',
  noRulesSet: (params) => `ⓘ Group admins have not set any rules yet.\n\n📌 To set rules, use *${params?.prefix || ''}setrules* followed by the rules text.`,
  rulesMessage: (params) => `📜 *Group Rules*\n\n${params?.rules || ''}`,

  // Scam check
  checkscamNoSite: () => '❌ *You must enter a site to check!*\n📌 _Example:_ *.checkscam www.site.com*',
  checkscamResult: (params) => `🔍 *Site analysis:*\n🌐 *Domain:* ${params?.site || 'N/A'}\n\n` +
    (params?.isScam ? '⚠️ *SCAM RISK!* ❌' : '✅ *Safe site!*') +
    `\n\n🔗 *Also verify on:* [ScamAdviser](${params?.scamUrl || '#'})`,
  checkscamError: () => '❌ *Error checking the site! Please try again later.*',

  // Dashboard
  dashboardTitle: (params) => `Dashboard *${params?.botName || 'ChatUnity'}*\n\n${params?.content || ''}`,
  dashboardEntry: (params) => `(${params?.index ?? 0})\n📚 • *_Command :_* *${params?.name || 'N/A'}*\n🗂 • *_Used :_* *${params?.total ?? 0}x*\n⛾ • *_Last Used :_* *${params?.lastUsed || 'N/A'}*`,
  timeDaysAgo: (params) => `${params?.days ?? 0} days ago`,
  timeHoursAgo: (params) => `${params?.hours ?? 0} hours ago`,
  timeMinutesAgo: (params) => `${params?.minutes ?? 0} minutes ago`,
  timeSecondsAgo: () => `a second ago`,

  // Image search
  imageSearchHelp: (params) => `🔍 *IMAGE SEARCH*\n\nUsage: ${params?.prefix || ''}${params?.command || 'img'} <search term>\n\nExample: ${params?.prefix || ''}${params?.command || 'img'} cute cat`,
  imageSearchBanned: () => '❌ Search term not allowed. Use appropriate terms.',
  imageSearchNoResults: () => '❌ No images found for the specified search.',
  imageSearchError: () => "❌ Error retrieving the image.",
  imageSearchResult: (params) => `🔍 *Search result:* ${params?.searchTerm || 'N/A'}\n\n📷 Source: Google Images`,
  imageSearchNetworkError: () => '❌ Network error. Please try again later.',
  smsWait: () => '🔍 Searching images...',
  smsError: () => '❌ An error occurred during the search.',

  // Repo info
  repoInfo: (params) => `『💬』 ══ •⊰✰⊱• ══ 『💬』\n` +
                        `✧ Name: ${params?.name || 'N/A'}\n` +
                        `✧ Link: ${params?.url || 'N/A'}\n` +
                        `✦ Size: ${params?.size || 'N/A'} MB\n` +
                        `✧ Updated: ${params?.updatedAt || 'N/A'}\n` +
                        `✧ Visitors: ${params?.watchers || 'N/A'}\n` +
                        `『💬』 ══ •⊰✰⊱• ══ 『💬』\n` +
                        `✧ Forks: ${params?.forks || 'N/A'} · Stars: ${params?.stars || 'N/A'} · Issues: ${params?.issues || 'N/A'}\n` +
                        `『💬』 ══ •⊰✰⊱• ══ 『💬』\n`,
  sendErrorLog: () => 'Error while sending the message:',
  sendError: () => 'Error while executing the command.',

  // Obfuscator
  obfuscateNoCode: () => '⚠️ *Enter the JavaScript code to obfuscate or reply to a message containing it!*',
  obfuscateError: () => '❌ *Error during obfuscation!*\n\nMake sure you provided valid JavaScript code.',

  // News feed
  newsHeader: () => '📰 *NEWS* 📰',
  newsArticle: (params) => `*${params?.index ?? 0}.* ${params?.title || 'Untitled'}\n` +
    (params?.description ? `📝 ${params.description}\n` : '') +
    (params?.link ? `🔗 ${params.link}\n` : '') +
    `📰 *Source:* ${params?.source || 'N/A'}`,
  newsNoResults: () => '❌ No news found at the moment. Please try again later.',
  newsError: () => '❌ Error fetching news. Please try again later.',

  // Pokémon shop and leaderboard
  buyPokemonUsage: () => `❌ Use: .buypokemon <base|imperium|premium> <quantity>\nExample: .buypokemon base 3`,
  insufficientCoins: (params) => `❌ You need *${params?.totalCost || 0}* UnityCoins to buy ${params?.quantity || 0} ${params?.type || 'N/A'} packs.\n💰 Current balance: ${params?.currentBalance || 0}`,
  purchaseSuccess: (params) => `✅ You bought *${params?.quantity || 0}* ${params?.type || 'N/A'} packs!\n📦 Total now: ${params?.totalPacks || 0}\n💸 Remaining UnityCoins: ${params?.remainingCoins || 0}`,
  noCollectorsFound: () => '😢 No collectors found.',
  leaderboardTitle: () => '🏆 *Top 10 Pokémon Collectors*:\n\n',
  leaderboardEntry: (params) => `${params?.position ?? '-'}.\u0020${params?.name || 'Unknown'} - ${params?.count ?? 0} cards`,

  // Branding (fallbacks)
  newsletterName: () => 'ChatUnity'
};
