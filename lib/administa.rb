require "administa/engine"
require "administa/config"
require "administa/model"

#
# TODO
# - メッセージ国際化対応
# - 認証
# - メニュー
# - 削除
# - animation入れる
# - genratorつける
# - test書きたい
# - file upload
# - enum
#
# Done;
# - has_many対応
# - has_many through対応
# - validation
# - 子associationをnewした後、再度ダイアログ開くと、選択されているassociationの情報が消える
#
module Administa

  def self.config(&block)
    config = Administa::Config
    if block_given?
      yield config
    end

    config
  end
end
