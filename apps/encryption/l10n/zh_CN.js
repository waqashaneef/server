OC.L10N.register(
    "encryption",
    {
    "Missing recovery key password" : "丢失的回复密钥",
    "Please repeat the recovery key password" : "请替换恢复密钥",
    "Repeated recovery key password does not match the provided recovery key password" : "重复的恢复密钥密码与提供的恢复密钥密码不匹配",
    "Recovery key successfully enabled" : "恢复密钥成功启用",
    "Could not enable recovery key. Please check your recovery key password!" : "不能启用恢复密钥。请检查恢复密钥密码！",
    "Recovery key successfully disabled" : "恢复密钥成功禁用",
    "Could not disable recovery key. Please check your recovery key password!" : "不能禁用恢复密钥。请检查恢复密钥密码！",
    "Missing parameters" : "缺少参数",
    "Please provide the old recovery password" : "请提供原来的恢复密码",
    "Please provide a new recovery password" : "请提供一个新的恢复密码",
    "Please repeat the new recovery password" : "请替换新的恢复密码",
    "Password successfully changed." : "密码修改成功。",
    "Could not change the password. Maybe the old password was not correct." : "不能修改密码。旧密码可能不正确。",
    "Recovery Key disabled" : "恢复密钥已禁用",
    "Recovery Key enabled" : "恢复密钥已启用",
    "Could not enable the recovery key, please try again or contact your administrator" : "无法启用恢复密钥，请重试或联系您的管理员",
    "Could not update the private key password." : "不能更新私有密钥。",
    "The old password was not correct, please try again." : "原始密码错误，请重试。",
    "The current log-in password was not correct, please try again." : "当前登录密码不正确，请重试。",
    "Private key password successfully updated." : "私钥密码成功更新。",
    "Invalid private key for encryption app. Please update your private key password in your personal settings to recover access to your encrypted files." : "无效的加密应用程序私钥。请在您的个人设置中更新您的私钥密码，以恢复对加密文件的访问。",
    "Encryption App is enabled, but your keys are not initialized. Please log-out and log-in again." : "加密应用被启用了，但是您的加密密钥没有初始化。请重新登出登录系统一次。",
    "Please enable server side encryption in the admin settings in order to use the encryption module." : "请启用管理员设置中的服务器端加密，以使用加密模块。",
    "Encryption app is enabled and ready" : "加密应用程序已启用并准备就绪",
    "Bad Signature" : "签名已损坏",
    "Missing Signature" : "签名已丢失",
    "one-time password for server-side-encryption" : "用于服务器端加密的一次性密码",
    "Can not decrypt this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : " 无法解密这个文件（或许这是一个共享文件？），请询问文件所有者重新与您共享这个文件。",
    "Can not read this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "无法读取此文件，可能这是一个共享文件。请让文件所有者重新共享该文件。",
    "Default encryption module" : "默认加密模块",
    "Default encryption module for server-side encryption" : "服务器端加密的默认加密模块",
    "In order to use this encryption module you need to enable server-side\n\t\tencryption in the admin settings. Once enabled this module will encrypt\n\t\tall your files transparently. The encryption is based on AES 256 keys.\n\t\tThe module won't touch existing files, only new files will be encrypted\n\t\tafter server-side encryption was enabled. It is also not possible to\n\t\tdisable the encryption again and switch back to a unencrypted system.\n\t\tPlease read the documentation to know all implications before you decide\n\t\tto enable server-side encryption." : "您需要在管理员设置中启用服务器端加密功能以使用此加密模块。\n\t\t此模块一旦被启用您的所有文件将被其透明地加密。\n\t\t加密基于AES 256密钥。在服务器端加密功能启用后，此模块\n\t\t将不会触碰已存在的文件，而只会对新文件进行加密。\n\t\t再次禁用加密功能也不可能切换回一个未加密的系统。\n\t\t在您决定启用服务器端加密功能前请阅读文档以了解\n\t\t这一操作的所有后果。",
    "Hey there,\n\nthe admin enabled server-side-encryption. Your files were encrypted using the password '%s'.\n\nPlease login to the web interface, go to the section 'basic encryption module' of your personal settings and update your encryption password by entering this password into the 'old log-in password' field and your current login-password.\n\n" : "您好，\n\n管理员已启用服务器端加密，您的文件已使用密码 '%s' 加密。\n\n请登陆网页界面，进入个人设置中的“基础加密模块”部分，在“旧登陆密码”处输入上述密码并输入您的当前登陆密码，即可更新加密密码。\n\n",
    "The share will expire on %s." : "此共享将在 %s 过期。",
    "Cheers!" : "干杯！",
    "Hey there,<br><br>the admin enabled server-side-encryption. Your files were encrypted using the password <strong>%s</strong>.<br><br>Please login to the web interface, go to the section \"basic encryption module\" of your personal settings and update your encryption password by entering this password into the \"old log-in password\" field and your current login-password.<br><br>" : "您好，<br><br>管理员已启用服务器端加密，您的文件已使用密码 <strong>%s</strong> 加密。<br><br>\n请登陆网页界面，进入个人设置中的“基础加密模块”部分，在“旧登陆密码”处输入上述密码并输入您的当前登陆密码，即可更新加密密码。<br><br>",
    "Encryption app is enabled but your keys are not initialized, please log-out and log-in again" : "加密应用程序已启用，但您的密钥未初始化，请注销并再次登录",
    "Encrypt the home storage" : "加密主目录储存",
    "Enabling this option encrypts all files stored on the main storage, otherwise only files on external storage will be encrypted" : "启用此选项将加密存储在主存储上的所有文件，否则只会加密外部存储上的文件",
    "Enable recovery key" : "启用恢复密钥",
    "Disable recovery key" : "禁用恢复密钥",
    "The recovery key is an extra encryption key that is used to encrypt files. It allows recovery of a user's files if the user forgets his or her password." : "恢复密钥是用于加密文件的额外加密密钥。如果用户忘记了密码，它允许用户恢复文件。",
    "Recovery key password" : "恢复密钥密码",
    "Repeat recovery key password" : "重复恢复密码",
    "Change recovery key password:" : "更改恢复密钥密码：",
    "Old recovery key password" : "旧的恢复密码",
    "New recovery key password" : "新恢复密码",
    "Repeat new recovery key password" : "重复新的恢复密码",
    "Change Password" : "修改密码",
    "Basic encryption module" : "基础加密模块",
    "Your private key password no longer matches your log-in password." : "您的私钥不再与您的登录密码匹配。",
    "Set your old private key password to your current log-in password:" : "将的私钥设置为当前登录密码：",
    " If you don't remember your old password you can ask your administrator to recover your files." : "如果您记不住旧的密码，您可以请求管理员恢复您的文件。",
    "Old log-in password" : "旧登录密码",
    "Current log-in password" : "当前登录密码",
    "Update Private Key Password" : "更新私钥密码",
    "Enable password recovery:" : "启用密码恢复：",
    "Enabling this option will allow you to reobtain access to your encrypted files in case of password loss" : "启用该项将允许您在密码丢失后取回您的加密文件",
    "Enabled" : "启用",
    "Disabled" : "禁用",
    "You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please run 'occ encryption:migrate' or contact your administrator" : "您需要从旧版本（ownCloud <= 8.0）迁移您的加密密钥。请运行 'occ encryption:migrate' 或联系您的管理员"
},
"nplurals=1; plural=0;");
