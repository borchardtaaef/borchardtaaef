  for i in range(0, 10000):

        # 等待当前页面所有数据加载完毕，正常情况下数据加载完毕后，这个‘加载中’元素会隐藏起来
        while (True):
            loading_status = WebDriverWait(driver, 20).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, 'div.j-save-popup.save-popup')))
            if (loading_status.is_displayed() == False):
                break

        # 隐藏导航栏，防止影响截图效果
        js = 'document.querySelector("body > header").style.display="none";'
        driver.execute_script(js)

        # 等待 下一月控件 出现
        next_month = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'button.next-month')))

        # 等待 下一月控件 可见才能模拟点击
        while(True):
            if(next_month.is_displayed() == True):
                break

        # 模拟点击 下一月控件
        time.sleep(0.5)
        next_month.click()


        # 判断当下一月控件的class name 是否为next-month disable，如果是，则说明翻到最后一月了
        page_source = driver.page_source
        if('next-month disable' in page_source):

            # 等待当前页面所有数据加载完毕，正常情况下数据加载完毕后，这个‘加载中’元素会隐藏起来
            while (True):
                loading_status = WebDriverWait(driver, 20).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, 'div.j-save-popup.save-popup')))
                if (loading_status.is_displayed() == False):
                    break


            # 等待 主页面控件 出现
            WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'ul.main')))
            main = driver.find_element_by_css_selector('ul.main')
            element_left_list = main.find_elements_by_css_selector('div.con-left')


            # 每一个element代表每一页，将每一页中style的display属性改成block，即可见状态
            for index, element in enumerate(element_left_list):
                # ..在xpath中表示上一级的元素，也就是父元素
                parent_element = element.find_element_by_xpath('..')
                # 获取这个父元素的完整id
                parent_element_id = parent_element.get_attribute('id')

                # 将该父元素更改为可见状态
                js = 'document.getElementById("{}").style.display="block";'.format(parent_element_id)
                driver.execute_script(js)

                # 将每一页之间的间隔去掉
                js = 'document.getElementById("{}").style.marginTop="0px";'.format(parent_element_id)
                driver.execute_script(js)
