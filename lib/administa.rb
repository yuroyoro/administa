require "administa/engine"
require "administa/config"
require "administa/model"

#
# TODO
# - 認証
# - 削除
# - permalink
# - animation入れる
# - genratorつける
# - test書きたい
# - file upload
# - enum
# - boolean
# - datetime picker
#
# Done;
# - has_many対応
# - has_many through対応
# - validation
# - 子associationをnewした後、再度ダイアログ開くと、選択されているassociationの情報が消える
# - メッセージ国際化対応
# - メニュー
# - メニュー階層化
#
module Administa

  def self.config(&block)
    @config ||= Administa::Config.new
    if block_given?
      yield @config
    end

    @config
  end
end
