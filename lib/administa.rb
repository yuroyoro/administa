require "administa/engine"
require "administa/config"
require "administa/model"

#
# TODO
# - animation入れる
# - test書きたい
# - ESLInt
#
# Done;
# - 認証
# - has_many対応
# - has_many through対応
# - validation
# - 子associationをnewした後、再度ダイアログ開くと、選択されているassociationの情報が消える
# - メッセージ国際化対応
# - メニュー
# - メニュー階層化
# - file upload
# - enum
# - boolean
# - genratorつける
# - permalink
# - datetime picker
# - 削除
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
